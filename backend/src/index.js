require('dotenv').config();
const express = require('express');
const app = express();
const { Pool } = require('pg');

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en puerto ${PORT}`);
});


// Servicio y endpoint para ruteo de leads vía WhatsApp (round robin)
app.post('/api/leads/whatsapp', async (req, res) => {
  const { empresa_id, origen } = req.body;
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
      )
      SELECT v.*
      FROM vendedores v, ultimo u
      ORDER BY (v.id > COALESCE(u.ultimo_vendedor_id, 0)) DESC, v.id ASC
      LIMIT 1;
    `;
    const vendedorResult = await client.query(query, [empresa_id, origen]);
    if (vendedorResult.rows.length === 0) {
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

    // 3. Responder con los datos del vendedor asignado
    res.json({ vendedor });
  } catch (err) {
    console.error('Error en /api/leads/whatsapp:', err);
    res.status(500).json({ error: err.message });
  } finally {
    client.release();
  }
});
