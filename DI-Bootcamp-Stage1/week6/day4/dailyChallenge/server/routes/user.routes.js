const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
} = require('../controllers/user.controller');

router.post('/register', register);
router.post('/login', login);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);

module.exports = router;
