const fs   = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, '../../users.json');

// ── Helpers ────────────────────────────────────────────────────────────────
const loadUsers = () => {
  try {
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    throw new Error('Failed to read users file: ' + err.message);
  }
};

const saveUsers = (users) => {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2));
  } catch (err) {
    throw new Error('Failed to write users file: ' + err.message);
  }
};

// ── CRUD ───────────────────────────────────────────────────────────────────
const getAll = () => loadUsers();

const getById = (id) => {
  const users = loadUsers();
  return users.find((u) => u.id === parseInt(id)) || null;
};

const findByUsername = (username) => {
  const users = loadUsers();
  return users.find((u) => u.username === username) || null;
};

const create = ({ name, lastName, email, username, hashedPassword }) => {
  const users = loadUsers();

  const nextId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;

  const newUser = { id: nextId, name, lastName, email, username, password: hashedPassword };
  users.push(newUser);
  saveUsers(users);
  return newUser;
};

const update = (id, fields) => {
  const users = loadUsers();
  const index = users.findIndex((u) => u.id === parseInt(id));
  if (index === -1) return null;

  users[index] = { ...users[index], ...fields };
  saveUsers(users);
  return users[index];
};

module.exports = { getAll, getById, findByUsername, create, update };
