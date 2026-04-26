const express = require('express');
const path = require('path');
const { PORT } = require('./server/config/config');
const gameRoutes = require('./server/routes/game.routes');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', gameRoutes);

app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.method} ${req.originalUrl} not found.` });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error.' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
