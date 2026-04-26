const GRID_SIZE = 10;
const OBSTACLE_COUNT = 12;

let state = {
  players: [],
  grid: [],
  currentTurn: 0,
  status: 'waiting', // 'waiting' | 'playing' | 'finished'
  winner: null,
};

// Protect cells within Manhattan distance 2 of each base
const isSafeZone = (row, col) => {
  const nearBase1 = Math.abs(row - 0) + Math.abs(col - 0) <= 2;
  const nearBase2 = Math.abs(row - 9) + Math.abs(col - 9) <= 2;
  return nearBase1 || nearBase2;
};

const createGrid = () => {
  const grid = Array.from({ length: GRID_SIZE }, () =>
    Array(GRID_SIZE).fill('empty')
  );

  let placed = 0;
  let attempts = 0;
  while (placed < OBSTACLE_COUNT && attempts < 1000) {
    const row = Math.floor(Math.random() * GRID_SIZE);
    const col = Math.floor(Math.random() * GRID_SIZE);
    attempts++;
    if (isSafeZone(row, col)) continue;
    if (grid[row][col] === 'obstacle') continue;
    grid[row][col] = 'obstacle';
    placed++;
  }

  return grid;
};

const getState = () => state;

const registerPlayer = (username) => {
  if (state.players.length >= 2) return { error: 'Game is full.' };
  if (state.players.find((p) => p.username === username))
    return { error: 'Username already taken.' };

  const playerIndex = state.players.length;
  const position =
    playerIndex === 0 ? { row: 0, col: 0 } : { row: 9, col: 9 };

  const player = { username, position: { ...position }, base: { ...position } };
  state.players.push(player);
  return { player };
};

const startGame = () => {
  if (state.players.length < 2) return { error: 'Need 2 players to start.' };
  if (state.status === 'playing') return { error: 'Game already started.' };

  state.grid = createGrid();
  state.status = 'playing';
  state.currentTurn = 0;
  state.winner = null;
  return { message: 'Game started!' };
};

const makeMove = (username, direction) => {
  if (state.status !== 'playing') return { error: 'Game is not in progress.' };

  const playerIndex = state.players.findIndex((p) => p.username === username);
  if (playerIndex === -1) return { error: 'Player not found.' };
  if (playerIndex !== state.currentTurn) return { error: 'It is not your turn.' };

  const player = state.players[playerIndex];
  const { row, col } = player.position;

  const moves = { up: { row: row - 1, col }, down: { row: row + 1, col }, left: { row, col: col - 1 }, right: { row, col: col + 1 } };
  const newPos = moves[direction];
  if (!newPos) return { error: 'Invalid direction.' };

  if (newPos.row < 0 || newPos.row >= GRID_SIZE || newPos.col < 0 || newPos.col >= GRID_SIZE)
    return { error: 'Move is out of bounds.' };

  if (state.grid[newPos.row][newPos.col] === 'obstacle')
    return { error: 'Cannot move through an obstacle.' };

  player.position = { ...newPos };

  const opponent = state.players[1 - playerIndex];
  if (newPos.row === opponent.base.row && newPos.col === opponent.base.col) {
    state.status = 'finished';
    state.winner = username;
    return { message: `${username} wins!`, winner: username };
  }

  state.currentTurn = 1 - state.currentTurn;
  return { message: 'Move successful.' };
};

const resetGame = () => {
  state = { players: [], grid: [], currentTurn: 0, status: 'waiting', winner: null };
};

module.exports = { getState, registerPlayer, startGame, makeMove, resetGame };
