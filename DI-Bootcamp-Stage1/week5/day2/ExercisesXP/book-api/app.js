const express = require('express');
const app = express();

app.use(express.json());

let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960 },
    { id: 3, title: "1984", author: "George Orwell", publishedYear: 1949 }
];

let nextId = 4;
const PORT = 5000;

// GET /api/books - Return all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// GET /api/books/:bookId - Return a specific book
app.get('/api/books/:bookId', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.bookId));
    if (!book) {
        return res.status(404).json({ error: "Book not found." });
    }
    res.status(200).json(book);
});

// POST /api/books - Create a new book
app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;
    if (!title || !author || !publishedYear) {
        return res.status(400).json({ error: "title, author, and publishedYear are required." });
    }
    const newBook = { id: nextId++, title, author, publishedYear };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
