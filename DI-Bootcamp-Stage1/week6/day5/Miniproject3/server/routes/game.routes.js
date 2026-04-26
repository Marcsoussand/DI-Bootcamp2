const express = require('express');
const router = express.Router();
const { register, startGame, getState, makeMove, resetGame } = require('../controllers/game.controller');

router.post('/register', register);
router.post('/game/start', startGame);
router.get('/game/state', getState);
router.post('/game/move', makeMove);
router.post('/game/reset', resetGame);

module.exports = router;
