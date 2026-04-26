const users = {};

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('join', (username, room) => {
        users[socket.id] = { username, room };
        socket.join(room);
        socket.emit('message',{
            username: 'System',
            text: `Welcome to room ${room}, ${username}!`,
            time: new Date().toLocaleTimeString()
        });
        socket.to(room).emit('notification', `${username} has joined the room`);

    const roomUsers = Object.values(users).filter(u => u.room === room);
    io.to(room).emit('users', roomUsers.map(u => u.username));
    });

    socket.on('message', (message) => {
        const user = users[socket.id];
        if (user) {
            io.to(user.room).emit('message',{
                username: user.username,
                text: message,
                time: new Date().toLocaleTimeString()
            });
        }
    });

    socket.on('disconnect', () => {
        const user = users[socket.id];
        if (user) {
            const { username, room } = user;
        delete users[socket.id];
        socket.to(room).emit('notification', `${username} has left the room`);
        
        const roomUsers = Object.values(users).filter(u => u.room === room);
        io.to(room).emit('users', roomUsers.map(u => u.username));
        }
    });
    });    
};