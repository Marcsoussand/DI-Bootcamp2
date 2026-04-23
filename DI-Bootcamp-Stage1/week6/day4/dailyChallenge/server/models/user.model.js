

const { db } = require('../config/config');

// GET all users (id, email, username, first_name, last_name — no passwords)
const getAllUsers = async () => {
  const result = await db.query(
    'SELECT id, email, username, first_name, last_name FROM users'
  );
  return result.rows;
};

// GET user by id
const getUserById = async (id) => {
  const result = await db.query(
    'SELECT id, email, username, first_name, last_name FROM users WHERE id = $1',
    [id]
  );
  return result.rows[0] || null;
};

// GET user by username (used to check uniqueness and during login)
const getUserByUsername = async (username) => {
  const result = await db.query(
    'SELECT id, email, username, first_name, last_name FROM users WHERE username = $1',
    [username]
  );
  return result.rows[0] || null;
};

// INSERT into both users and hashpwd inside a transaction
const createUserTransaction = async ({ email, username, first_name, last_name, hashedPassword }) => {
  const client = await db.connect();
  try {
    await client.query('BEGIN');

    const userResult = await client.query(
      `INSERT INTO users (email, username, first_name, last_name)
       VALUES ($1, $2, $3, $4)
       RETURNING id, email, username, first_name, last_name`,
      [email, username, first_name, last_name]
    );

    await client.query(
      `INSERT INTO hashpwd (username, password)
       VALUES ($1, $2)`,
      [username, hashedPassword]
    );

    await client.query('COMMIT');
    return userResult.rows[0];
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
};

// UPDATE user fields by id
const updateUser = async (id, { email, first_name, last_name }) => {
  const result = await db.query(
    `UPDATE users
     SET email = $1, first_name = $2, last_name = $3
     WHERE id = $4
     RETURNING id, email, username, first_name, last_name`,
    [email, first_name, last_name, id]
  );
  return result.rows[0] || null;
};

// GET hashed password for a username (used during login)
const getHashedPassword = async (username) => {
  const result = await db.query(
    'SELECT password FROM hashpwd WHERE username = $1',
    [username]
  );
  return result.rows[0] ? result.rows[0].password : null;
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByUsername,
  createUserTransaction,
  updateUser,
  getHashedPassword,
};
