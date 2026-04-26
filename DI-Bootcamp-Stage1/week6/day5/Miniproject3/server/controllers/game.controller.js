const Game = require('../models/game.model');

const register = (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ message: 'Username is required.' });

  const result = Game.registerPlayer(username);
  if (result.error) return res.status(400).json({ message: result.error });

  const state = Game.getState();
  res.status(201).json({ message: `Player ${username} registered.`, player: result.player, playersCount: state.players.length });
};

const startGame = (req, res) => {
  const result = Game.startGame();
  if (result.error) return res.status(400).json({ message: result.error });
  res.status(200).json({ message: result.message, state: Game.getState() });
};

const getState = (req, res) => {
  res.status(200).json(Game.getState());
};

const makeMove = (req, res) => {
  const { username, direction } = req.body;
  if (!username || !direction)
    return res.status(400).json({ message: 'username and direction are required.' });

  const result = Game.makeMove(username, direction);
  if (result.error) return res.status(400).json({ message: result.error });

  res.status(200).json({ ...result, state: Game.getState() });
};

const resetGame = (req, res) => {
  Game.resetGame();
  res.status(200).json({ message: 'Game reset.' });
};

module.exports = { register, startGame, getState, makeMove, resetGame };
