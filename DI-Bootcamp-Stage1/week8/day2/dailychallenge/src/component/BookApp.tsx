import { useState } from "react";
import type { Book } from "../types";
import List from "./List";

export default function BookApp() {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "Les Piliers de la Terre", author: "Ken Follett" },
    { id: 2, title: "Azteca", author: "Gary Jennings" },
    { id: 3, title: "Le nom de la rose", author: "Umberto Eco" },
  ]);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newAuthor, setNewAuthor] = useState<string>("");

  const addBook = () => {
    if (!newTitle.trim() || !newAuthor.trim()) return;
    const newBook: Book = {
      id: books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1,
      title: newTitle.trim(),
      author: newAuthor.trim(),
    };
    setBooks([...books, newBook]);
    setNewTitle("");
    setNewAuthor("");
  };

  return (
    <>
      <h3>Create a new Book :</h3>
      <input
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Enter the title"
      />
      <input
        value={newAuthor}
        onChange={(e) => setNewAuthor(e.target.value)}
        placeholder="Enter the author"
      />
      <button onClick={addBook}>Add Book</button>
      <List<Book>
        items={books}
        renderItem={(book) => <div>{book.title} par {book.author}</div>}
      />
    </>
  );
}

