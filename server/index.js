const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const pool = new Pool({
  user: 'user',
  host: 'postgres',
  database: 'db',
  password: 'password',
  port: 5432,
});

app.get('/api', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT $1::text as message', ['Hello from PostgreSQL!!!']);
    const msg = result.rows[0].message;
    return res.status(200).send({
      success: true,
      message: 'Successfully talked to backend.',
      data: { msg },
    })
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
    return res.status(200).send({
      success: false,
      message: 'Something went wrong',
    })
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
