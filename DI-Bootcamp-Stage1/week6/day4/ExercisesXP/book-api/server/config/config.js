require('dotenv').config();
const { Pool } = require('pg');

const PORT = process.env.PORT || 5000;

const db = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

module.exports = { PORT, db };
