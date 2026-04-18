const express = require('express');
const app = express();
const quizRouter = require('./routes/quiz');

// Parse URL-encoded form bodies (from HTML forms)
app.use(express.urlencoded({ extended: true }));

// Mount quiz router
app.use('/quiz', quizRouter);

// Root redirect
app.get('/', (req, res) => {
  res.redirect('/quiz');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Trivia Quiz app running at http://localhost:${PORT}`);
});
