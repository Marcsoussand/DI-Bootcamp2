const { db } = require('../config/config');

// SQL schema (run once in your DB):
// CREATE TABLE posts (
//   id      SERIAL PRIMARY KEY,
//   title   VARCHAR(255) NOT NULL,
//   content TEXT         NOT NULL
// );

const getAll = async () => {
  const { rows } = await db.query('SELECT * FROM posts ORDER BY id ASC');
  return rows;
};

const getById = async (id) => {
  const { rows } = await db.query('SELECT * FROM posts WHERE id = $1', [id]);
  return rows[0] || null;
};

const create = async ({ title, content }) => {
  const { rows } = await db.query(
    'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
    [title, content]
  );
  return rows[0];
};

const update = async (id, { title, content }) => {
  const { rows } = await db.query(
    'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *',
    [title, content, id]
  );
  return rows[0] || null;
};

const remove = async (id) => {
  const { rows } = await db.query(
    'DELETE FROM posts WHERE id = $1 RETURNING *',
    [id]
  );
  return rows[0] || null;
};

module.exports = { getAll, getById, create, update, remove };
