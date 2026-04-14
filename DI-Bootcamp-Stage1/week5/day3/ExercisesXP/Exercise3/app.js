const express = require('express');
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Import and mount the books router
const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
