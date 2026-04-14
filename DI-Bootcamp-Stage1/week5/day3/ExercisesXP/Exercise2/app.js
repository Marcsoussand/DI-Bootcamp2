const express = require('express');
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Import and mount the todos router
const todosRouter = require('./routes/todos');
app.use('/todos', todosRouter);

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
