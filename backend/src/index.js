require('dotenv').config({
  path: require('path').resolve(__dirname, '../.env')
});

console.log('🔥 ENV DEBUG 🔥', {
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  PORT: process.env.PORT,
});
const express = require('express');
const app = express();
const { Pool } = require('pg');

console.log('ENV DEBUG:', {
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  PORT: process.env.PORT,
});

app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

app.get('/api/items', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM items');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/items', async (req, res) => {
  const { name } = req.body;
  try {
    const result = await pool.query('INSERT INTO items(name) VALUES($1) RETURNING *', [name]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001; // alineado con proxy de Vite (ver vite.config.js)
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en puerto ${PORT}`);
});


// Servicio y endpoint para ruteo de leads vía WhatsApp (round robin)
app.post('/api/leads/whatsapp', async (req, res) => {
  const { empresa_id, origen } = req.body;
  console.log('[whatsapp] request body:', { empresa_id, origen });
  if (!empresa_id || !origen) {
    return res.status(400).json({ error: 'empresa_id y origen son requeridos' });
  }
  const client = await pool.connect();
  try {
    // 1. Leer modo de asignación activo para este origen
    const ruteoResult = await client.query(
      `SELECT id, modo_asignacion, vendedor_fijo_id
       FROM crm_ruteo_leads
       WHERE empresa_id = $1
         AND origen = $2
         AND activo = true
       LIMIT 1`,
      [empresa_id, origen]
    );

    if (ruteoResult.rows.length === 0) {
      console.warn('[whatsapp] sin configuración de ruteo para', { empresa_id, origen });
      return res.status(404).json({ error: 'No hay configuración de ruteo activa para este origen/empresa.' });
    }

    const ruteo = ruteoResult.rows[0];
    let vendedor;

    if (ruteo.modo_asignacion === 'fijo') {
      // 2a. Modo fijo: devolver el contacto central directamente, sin tocar ultimo_vendedor_id
      if (!ruteo.vendedor_fijo_id) {
        return res.status(500).json({ error: 'Modo fijo activo pero vendedor_fijo_id es nulo.' });
      }
      const fijoResult = await client.query(
        `SELECT id, nombre, telefono, email
         FROM contactos
         WHERE id = $1
           AND empresa_id = $2
           AND activo = true
           AND bloqueado = false`,
        [ruteo.vendedor_fijo_id, empresa_id]
      );
      if (fijoResult.rows.length === 0) {
        return res.status(404).json({ error: 'El contacto fijo asignado no está disponible.' });
      }
      vendedor = fijoResult.rows[0];
    } else {
      // 2b. Modo round_robin: comportamiento original sin cambios
      const query = `
        WITH vendedores AS (
          SELECT id, nombre, telefono, email
          FROM contactos
          WHERE tipo_contacto = 'Vendedor'
            AND activo = true
            AND bloqueado = false
            AND empresa_id = $1
          ORDER BY id
        ),
        ultimo AS (
          SELECT ultimo_vendedor_id
          FROM crm_ruteo_leads
          WHERE empresa_id = $1
            AND origen = $2
            AND modo_asignacion = 'round_robin'
            AND activo = true
          LIMIT 1
        ),
        base AS (
          SELECT COALESCE((SELECT ultimo_vendedor_id FROM ultimo), 0) AS ultimo_vendedor_id
        )
        SELECT v.*
        FROM vendedores v
        CROSS JOIN base b
        ORDER BY (v.id > b.ultimo_vendedor_id) DESC, v.id ASC
        LIMIT 1;
      `;
      const vendedorResult = await client.query(query, [empresa_id, origen]);
      console.log('[whatsapp] rows found:', vendedorResult.rows.length, 'rows:', vendedorResult.rows);
      if (vendedorResult.rows.length === 0) {
        console.warn('[whatsapp] no active vendors for', { empresa_id, origen });
        return res.status(404).json({ error: 'No hay vendedores activos para este origen/empresa.' });
      }
      vendedor = vendedorResult.rows[0];

      // Actualizar estado del round robin
      const updateQuery = `
        UPDATE crm_ruteo_leads
        SET ultimo_vendedor_id = $1, fecha_actualizacion = NOW()
        WHERE empresa_id = $2 AND origen = $3 AND modo_asignacion = 'round_robin' AND activo = true;
      `;
      await client.query(updateQuery, [vendedor.id, empresa_id, origen]);
    }

    // 3. Responder con el contrato que espera el frontend (ok + payload = telefono)
    const telefono = vendedor?.telefono ? String(vendedor.telefono) : null;
    console.log('[whatsapp] responding with telefono:', telefono);
    if (!telefono) {
      return res.status(500).json({ error: 'El contacto asignado no tiene teléfono' });
    }

    return res.json({ ok: true, payload: telefono, vendedor });
  } catch (err) {
    console.error('Error en /api/leads/whatsapp:', err);
    res.status(500).json({ error: err.message });
  } finally {
    client.release();
  }
});

// Registro de intentos de contacto vía WhatsApp
app.post('/api/whatsapp/intentos-contacto', async (req, res) => {
  const {
    empresa_id,
    pagina_origen,
    producto,
    fuente,
    mensaje_prellenado,
    session_id,
    user_agent,
    tipo_intento,
  } = req.body || {};

  if (!empresa_id) {
    return res.status(400).json({ error: 'empresa_id es requerido' });
  }

  if (!session_id) {
    return res.status(400).json({ error: 'session_id es requerido' });
  }

  if (!pagina_origen) {
    return res.status(400).json({ error: 'pagina_origen es requerido' });
  }

  const ipAddress = (req.headers['x-forwarded-for'] || '').toString().split(',')[0].trim() || req.ip;
  const tipoIntentoNormalizado = tipo_intento || 'whatsapp_click';
  const dedupeWindowSeconds = 60;

  const client = await pool.connect();

  const advisoryLockQuery = `
    SELECT pg_advisory_xact_lock(
      hashtext($1 || '|' || $2 || '|' || $3)
    );
  `;

  const dedupeQuery = `
    SELECT id
    FROM whatsapp.intentos_contacto
    WHERE session_id = $1
      AND pagina_origen = $2
      AND tipo_intento = $3
      AND creado_en >= NOW() - make_interval(secs => $4)
    ORDER BY creado_en DESC
    LIMIT 1;
  `;

  const insertQuery = `
    INSERT INTO whatsapp.intentos_contacto (
      empresa_id,
      pagina_origen,
      producto,
      fuente,
      mensaje_prellenado,
      session_id,
      ip_address,
      user_agent,
      tipo_intento
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING id;
  `;

  try {
    await client.query('BEGIN');

    await client.query(advisoryLockQuery, [
      session_id,
      pagina_origen,
      tipoIntentoNormalizado,
    ]);

    const existingResult = await client.query(dedupeQuery, [
      session_id,
      pagina_origen,
      tipoIntentoNormalizado,
      dedupeWindowSeconds,
    ]);

    const existingId = existingResult.rows[0]?.id;
    if (existingId) {
      await client.query('COMMIT');
      return res.status(200).json({ ok: true, id: existingId, duplicado: true });
    }

    const result = await client.query(insertQuery, [
      empresa_id,
      pagina_origen,
      producto || null,
      fuente || 'web',
      mensaje_prellenado || null,
      session_id,
      ipAddress,
      user_agent || null,
      tipoIntentoNormalizado,
    ]);

    await client.query('COMMIT');
    return res.status(201).json({ ok: true, id: result.rows[0]?.id, duplicado: false });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error registrando intento de contacto WhatsApp:', error);
    return res.status(500).json({ error: 'Error al registrar el intento de contacto' });
  } finally {
    client.release();
  }
});
