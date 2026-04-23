const express = require('express');
const { PORT } = require('./server/config/config');
const bookRoutes = require('./server/routes/book.routes');

const app = express();

// Parse incoming JSON request bodies
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// 404 handler for invalid routes
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
