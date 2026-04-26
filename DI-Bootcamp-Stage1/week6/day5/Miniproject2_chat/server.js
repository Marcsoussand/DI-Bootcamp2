const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");
const { PORT } = require("./server/config/config");
const registerChatSocket = require("./server/socket/chat.socket");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Register chat socket
registerChatSocket(io);

// 404 handler for invalid routes
app.use((req, res) => {
    res.status(404).json({ message: `Route ${req.method} ${req.originalUrl} not found.` });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error.' });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});