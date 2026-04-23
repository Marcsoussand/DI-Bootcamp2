const express = require('express');
const { PORT } = require('./server/config/config');
const userRoutes = require('./server/routes/user.routes');

const app = express();

app.use(express.json());

// All user-related routes
app.use('/', userRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.method} ${req.originalUrl} not found.` });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
