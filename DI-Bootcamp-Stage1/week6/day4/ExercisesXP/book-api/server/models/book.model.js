let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', publishedYear: 1949 },
];

let nextId = 4;

const getAll = () => books;

const getById = (id) => books.find((b) => b.id === id);

const create = ({ title, author, publishedYear }) => {
  const book = { id: nextId++, title, author, publishedYear };
  books.push(book);
  return book;
};

module.exports = { getAll, getById, create };
