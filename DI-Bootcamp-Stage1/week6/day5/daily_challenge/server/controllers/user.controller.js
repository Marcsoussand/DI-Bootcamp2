const bcrypt    = require('bcrypt');
const UserModel = require('../models/user.model');

const SALT_ROUNDS = 10;

// POST /register
const register = async (req, res) => {
  try {
    const { name, lastName, email, username, password } = req.body;

    if (!name || !lastName || !email || !username || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check for duplicate username or email
    const users = UserModel.getAll();
    const duplicate = users.find(
      (u) => u.username === username || u.email === email
    );

    if (duplicate) {
      const field = duplicate.username === username ? 'Username' : 'Email';
      return res.status(409).json({ message: `${field} already exists.` });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = UserModel.create({ name, lastName, email, username, hashedPassword });

    // Return user without the password
    const { password: _pw, ...safeUser } = newUser;
    return res.status(201).json({
      message: `${username} your account is now created!`,
      user: safeUser,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// POST /login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }

    const user = UserModel.findByUsername(username);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials: user not registered.' });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: 'Invalid credentials: wrong password.' });
    }

    const { password: _pw, ...safeUser } = user;
    return res.status(200).json({
      message: `${username} has been logged in successfully!`,
      user: safeUser,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// GET /users
const getAllUsers = (req, res) => {
  try {
    const users = UserModel.getAll().map(({ password: _pw, ...u }) => u);
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// GET /users/:id
const getUserById = (req, res) => {
  try {
    const user = UserModel.getById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found.' });

    const { password: _pw, ...safeUser } = user;
    return res.status(200).json(safeUser);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// PUT /users/:id
const updateUser = (req, res) => {
  try {
    const { name, lastName, email } = req.body;

    if (!name && !lastName && !email) {
      return res.status(400).json({ message: 'Provide at least one field to update.' });
    }

    const updated = UserModel.update(req.params.id, { name, lastName, email });
    if (!updated) return res.status(404).json({ message: 'User not found.' });

    const { password: _pw, ...safeUser } = updated;
    return res.status(200).json({ message: 'User updated successfully.', user: safeUser });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { register, login, getAllUsers, getUserById, updateUser };
