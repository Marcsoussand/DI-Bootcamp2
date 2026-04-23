const express = require('express');
const router = express.Router();
const { getAllBooks, getBookById, createBook } = require('../controllers/book.controller');

router.get('/', getAllBooks);
router.get('/:bookId', getBookById);
router.post('/', createBook);

module.exports = router;
