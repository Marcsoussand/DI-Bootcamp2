const express = require('express');
const app = express();

// Middleware: logs today's date and current time (H:M:S)
const dateTimeLogger = (req, res, next) => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    console.log(`Date: ${date} | Time: ${hours}:${minutes}:${seconds}`);
    next();
};

// 1. Call middleware before EVERY route
app.use(dateTimeLogger);

// Route 1
app.get('/route1', (req, res) => {
    res.send('Hello from Route 1');
});

// Route 2 — middleware also explicitly called before this route
app.get('/route2', dateTimeLogger, (req, res) => {
    res.send('Hello from Route 2');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
