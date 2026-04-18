const express = require('express');
const router = express.Router();
const triviaQuestions = require('../models/quiz');

// In-memory game state (resets on server restart)
let gameState = {
  currentIndex: 0,
  score: 0,
  finished: false,
};

// GET /quiz - Start/continue quiz, display current question
router.get('/', (req, res) => {
  // Reset game state on GET /quiz
  gameState = { currentIndex: 0, score: 0, finished: false };

  const question = triviaQuestions[0];
  res.send(`
    <h1>Trivia Quiz</h1>
    <p><strong>Question 1 of ${triviaQuestions.length}:</strong> ${question.question}</p>
    <form method="POST" action="/quiz">
      <input type="text" name="answer" placeholder="Your answer" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

// POST /quiz - Submit an answer and move to the next question
router.post('/', (req, res) => {
  if (gameState.finished) {
    return res.redirect('/quiz/score');
  }

  const { answer } = req.body;
  const current = triviaQuestions[gameState.currentIndex];
  const isCorrect =
    answer.trim().toLowerCase() === current.answer.toLowerCase();

  if (isCorrect) {
    gameState.score++;
  }

  const feedback = isCorrect
    ? `<p style="color:green">Correct!</p>`
    : `<p style="color:red">Wrong! The correct answer was: <strong>${current.answer}</strong></p>`;

  gameState.currentIndex++;

  if (gameState.currentIndex >= triviaQuestions.length) {
    gameState.finished = true;
    return res.send(`
      <h1>Trivia Quiz</h1>
      ${feedback}
      <p>That was the last question!</p>
      <a href="/quiz/score">See your final score</a>
    `);
  }

  const nextQuestion = triviaQuestions[gameState.currentIndex];
  res.send(`
    <h1>Trivia Quiz</h1>
    ${feedback}
    <p><strong>Question ${gameState.currentIndex + 1} of ${triviaQuestions.length}:</strong> ${nextQuestion.question}</p>
    <form method="POST" action="/quiz">
      <input type="text" name="answer" placeholder="Your answer" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

// GET /quiz/score - Display final score
router.get('/score', (req, res) => {
  const total = triviaQuestions.length;
  const { score } = gameState;
  res.send(`
    <h1>Quiz Complete!</h1>
    <p>Your final score: <strong>${score} / ${total}</strong></p>
    <a href="/quiz">Play again</a>
  `);
});

module.exports = router;
