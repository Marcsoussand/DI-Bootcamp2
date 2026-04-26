const { db } = require('../config/config');

// SQL schema (run once in your DB):
// CREATE TABLE books (
//   id            SERIAL PRIMARY KEY,
//   title         VARCHAR(255) NOT NULL,
//   author        VARCHAR(255) NOT NULL,
//   published_year INT         NOT NULL
// );

const getAll = async () => {
  const { rows } = await db.query('SELECT * FROM books ORDER BY id ASC');
  return rows;
};

const getById = async (id) => {
  const { rows } = await db.query('SELECT * FROM books WHERE id = $1', [id]);
  return rows[0] || null;
};

const create = async ({ title, author, publishedYear }) => {
  const { rows } = await db.query(
    'INSERT INTO books (title, author, published_year) VALUES ($1, $2, $3) RETURNING *',
    [title, author, publishedYear]
  );
  return rows[0];
};

module.exports = { getAll, getById, create };
