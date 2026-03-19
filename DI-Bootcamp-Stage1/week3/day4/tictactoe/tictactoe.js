// ─── Winning combinations ────────────────────────────────────────────────────
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

// ─── Game state ───────────────────────────────────────────────────────────────
let board = Array(9).fill(null);   // null | 'X' | 'O'
let playerSymbol  = 'X';
let computerSymbol = 'O';
let difficulty = 'easy';
let gameActive = false;
let playerTurn  = true;

// ─── Setup helpers ────────────────────────────────────────────────────────────
function chooseSymbol(symbol) {
    playerSymbol   = symbol;
    computerSymbol = symbol === 'X' ? 'O' : 'X';

    document.getElementById('btn-x').classList.toggle('active', symbol === 'X');
    document.getElementById('btn-o').classList.toggle('active', symbol === 'O');

    startGame();
}

function chooseDifficulty(level) {
    difficulty = level;
    document.getElementById('btn-easy').classList.toggle('active', level === 'easy');
    document.getElementById('btn-hard').classList.toggle('active', level === 'hard');

    // Restart immediately so the new difficulty takes effect
    if (gameActive) startGame();
}

// ─── Game lifecycle ───────────────────────────────────────────────────────────
function startGame() {
    board = Array(9).fill(null);
    gameActive  = true;
    playerTurn  = true;

    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
        cell.className   = 'cell';          // remove x / o / winner classes
    });

    document.getElementById('restart-btn').style.display = 'none';
    setStatus(`Your turn (${playerSymbol})`);
}

function restartGame() {
    startGame();
}

// ─── Player move ─────────────────────────────────────────────────────────────
function handleCellClick(index) {
    if (!gameActive || !playerTurn || board[index]) return;

    makeMove(index, playerSymbol);
    if (!gameActive) return;

    playerTurn = false;
    setStatus('Computer is thinking…');

    // Small delay so the player sees their move before the AI responds
    setTimeout(() => {
        computerMove();
        if (gameActive) {
            playerTurn = true;
            setStatus(`Your turn (${playerSymbol})`);
        }
    }, 350);
}

// ─── Shared move executor ─────────────────────────────────────────────────────
function makeMove(index, symbol) {
    board[index] = symbol;
    const cell = document.getElementById(`cell-${index}`);
    cell.textContent = symbol;
    cell.classList.add(symbol.toLowerCase());

    checkOutcome();
}

// ─── Outcome check ────────────────────────────────────────────────────────────
function checkOutcome() {
    const result = checkWinner(board);

    if (result) {
        highlightWinner(result.combo);
        const msg = result.symbol === playerSymbol ? 'You win! 🎉' : 'Computer wins! 🤖';
        setStatus(msg);
        gameActive = false;
        document.getElementById('restart-btn').style.display = 'block';
        return;
    }

    // Use reduce to gather all empty cells – if none remain it's a tie
    const emptyCells = board.reduce((acc, cell, idx) => {
        if (!cell) acc.push(idx);
        return acc;
    }, []);

    if (emptyCells.length === 0) {
        setStatus("It's a tie! 🤝");
        gameActive = false;
        document.getElementById('restart-btn').style.display = 'block';
    }
}

// ─── Winner detection (uses reduce) ──────────────────────────────────────────
function checkWinner(boardState) {
    return winCombos.reduce((found, combo) => {
        if (found) return found;
        const [a, b, c] = combo;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return { symbol: boardState[a], combo };
        }
        return null;
    }, null);
}

function highlightWinner(combo) {
    combo.forEach(idx => document.getElementById(`cell-${idx}`).classList.add('winner'));
}

// ─── AI: Easy – picks a random empty cell ────────────────────────────────────
function easyAI() {
    const available = board.reduce((acc, cell, idx) => {
        if (!cell) acc.push(idx);
        return acc;
    }, []);
    return available[Math.floor(Math.random() * available.length)];
}

// ─── AI: Hard – minimax (unbeatable) ─────────────────────────────────────────
function hardAI() {
    let bestScore = -Infinity;
    let bestMove  = null;

    board.forEach((cell, idx) => {
        if (!cell) {
            board[idx] = computerSymbol;
            const score = minimax(board, 0, false);
            board[idx]  = null;
            if (score > bestScore) {
                bestScore = score;
                bestMove  = idx;
            }
        }
    });

    return bestMove;
}

// Minimax – uses reduce for iterating empty cells (advanced JS method)
function minimax(boardState, depth, isMaximizing) {
    const result = checkWinner(boardState);
    if (result) return result.symbol === computerSymbol ? 10 - depth : depth - 10;

    const emptyCells = boardState.reduce((acc, cell, idx) => {
        if (!cell) acc.push(idx);
        return acc;
    }, []);

    if (emptyCells.length === 0) return 0;   // tie

    if (isMaximizing) {
        return emptyCells.reduce((best, idx) => {
            boardState[idx] = computerSymbol;
            const score = minimax(boardState, depth + 1, false);
            boardState[idx] = null;
            return Math.max(best, score);
        }, -Infinity);
    } else {
        return emptyCells.reduce((best, idx) => {
            boardState[idx] = playerSymbol;
            const score = minimax(boardState, depth + 1, true);
            boardState[idx] = null;
            return Math.min(best, score);
        }, Infinity);
    }
}

function computerMove() {
    const move = difficulty === 'easy' ? easyAI() : hardAI();
    if (move !== null && move !== undefined) makeMove(move, computerSymbol);
}

// ─── Utility ──────────────────────────────────────────────────────────────────
function setStatus(msg) {
    document.getElementById('status-message').textContent = msg;
}
