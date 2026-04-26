const express = require("express");
const {PORT} = require('./server/config/config');
const taskRoutes = require('./server/routes/task.routes');

const app = express();

app.use(express.json());

app.use('/tasks', taskRoutes);

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