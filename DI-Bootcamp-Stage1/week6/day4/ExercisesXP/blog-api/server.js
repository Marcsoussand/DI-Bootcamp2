const express = require('express');
const { PORT } = require('./server/config/config');
const postRoutes = require('./server/routes/post.routes');

const app = express();

// Parse incoming JSON request bodies
app.use(express.json());

// Routes
app.use('/posts', postRoutes);

// 404 handler for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.originalUrl} not found.` });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
