const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const SALT_ROUNDS = 10;

// POST /register
const register = async (req, res) => {
  try {
    const { email, username, first_name, last_name, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'username and password are required.' });
    }

    const existing = await User.getUserByUsername(username);
    if (existing) {
      return res.status(409).json({ message: 'Username already taken.' });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await User.createUserTransaction({
      email,
      username,
      first_name,
      last_name,
      hashedPassword,
    });

    res.status(201).json({ message: 'User registered successfully.', user });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed.', error: err.message });
  }
};

// POST /login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'username and password are required.' });
    }

    const hashedPassword = await User.getHashedPassword(username);
    if (!hashedPassword) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    res.status(200).json({ message: 'Login successful.' });
  } catch (err) {
    res.status(500).json({ message: 'Login failed.', error: err.message });
  }
};

// GET /users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve users.', error: err.message });
  }
};

// GET /users/:id
const getUserById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await User.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve user.', error: err.message });
  }
};

// PUT /users/:id
const updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { email, first_name, last_name } = req.body;

    const updated = await User.updateUser(id, { email, first_name, last_name });
    if (!updated) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ message: 'User updated successfully.', user: updated });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update user.', error: err.message });
  }
};

module.exports = { register, login, getAllUsers, getUserById, updateUser };
