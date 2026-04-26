const Book = require('../models/book.model');

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.getAll();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const id = parseInt(req.params.bookId);
    if (isNaN(id)) return res.status(400).json({ message: 'bookId must be a number.' });

    const book = await Book.getById(id);
    if (!book) return res.status(404).json({ message: 'Book not found.' });

    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
      return res.status(400).json({ message: 'title is required and must be a non-empty string.' });
    }
    if (!author || typeof author !== 'string' || author.trim() === '') {
      return res.status(400).json({ message: 'author is required and must be a non-empty string.' });
    }
    if (publishedYear === undefined || publishedYear === null) {
      return res.status(400).json({ message: 'publishedYear is required.' });
    }
    const year = Number(publishedYear);
    if (!Number.isInteger(year) || year < 1 || year > new Date().getFullYear()) {
      return res.status(400).json({ message: `publishedYear must be a valid integer year (1 – ${new Date().getFullYear()}).` });
    }

    const book = await Book.create({ title: title.trim(), author: author.trim(), publishedYear: year });
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllBooks, getBookById, createBook };
