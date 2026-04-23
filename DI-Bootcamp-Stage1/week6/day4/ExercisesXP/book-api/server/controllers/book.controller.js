const Book = require('../models/book.model');

const getAllBooks = (req, res) => {
  res.status(200).json(Book.getAll());
};

const getBookById = (req, res) => {
  const id = parseInt(req.params.bookId);
  const book = Book.getById(id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.status(200).json(book);
};

const createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: 'title, author, and publishedYear are required.' });
  }
  const book = Book.create({ title, author, publishedYear });
  res.status(201).json(book);
};

module.exports = { getAllBooks, getBookById, createBook };
