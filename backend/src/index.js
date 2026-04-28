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
    // 1. Obtener el siguiente vendedor según round robin
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
    const vendedor = vendedorResult.rows[0];

    // 2. Actualizar el campo ultimo_vendedor_id en crm_ruteo_leads
    const updateQuery = `
      UPDATE crm_ruteo_leads
      SET ultimo_vendedor_id = $1, fecha_actualizacion = NOW()
      WHERE empresa_id = $2 AND origen = $3 AND modo_asignacion = 'round_robin' AND activo = true;
    `;
    await client.query(updateQuery, [vendedor.id, empresa_id, origen]);

    // 3. Responder con el contrato que espera el frontend (ok + payload = telefono)
    const telefono = vendedor?.telefono ? String(vendedor.telefono) : null;
    console.log('[whatsapp] responding with telefono:', telefono);
    if (!telefono) {
      return res.status(500).json({ error: 'El vendedor asignado no tiene teléfono' });
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
  const { empresa_id, pagina_origen, producto, fuente, mensaje_prellenado, session_id, user_agent } = req.body || {};

  if (!empresa_id) {
    return res.status(400).json({ error: 'empresa_id es requerido' });
  }

  const ipAddress = (req.headers['x-forwarded-for'] || '').toString().split(',')[0].trim() || req.ip;

  const query = `
    INSERT INTO whatsapp.intentos_contacto (
      empresa_id,
      pagina_origen,
      producto,
      fuente,
      mensaje_prellenado,
      session_id,
      ip_address,
      user_agent
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING id;
  `;

  const values = [
    empresa_id,
    pagina_origen || null,
    producto || null,
    fuente || 'web',
    mensaje_prellenado || null,
    session_id || null,
    ipAddress,
    user_agent || null,
  ];

  try {
    const result = await pool.query(query, values);
    return res.status(201).json({ ok: true, id: result.rows[0]?.id });
  } catch (error) {
    console.error('Error registrando intento de contacto WhatsApp:', error);
    return res.status(500).json({ error: 'Error al registrar el intento de contacto' });
  }
});
