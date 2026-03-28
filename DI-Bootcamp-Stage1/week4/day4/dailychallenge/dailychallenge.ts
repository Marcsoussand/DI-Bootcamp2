// Create a simple library system with TypeScript:

// Interface Book: Define an interface Book with the following properties:

// title (string)
// author (string)
// isbn (string)
// publishedYear (number)
// An optional genre property (string)
// Class Library: Create a class Library with:

// A private property books (array of Book).
// A public method addBook to add a new book to the library.
// A public method getBookDetails that returns details of a book based on the isbn.
// Class DigitalLibrary: Create a class DigitalLibrary that extends Library and adds:

// A readonly property website (string) for the library’s website.
// A public method listBooks that returns a list of all book titles in the library.
// Create an instance of DigitalLibrary, add some books to it,
//  and then print out the details of the books and the list of all book titles.

interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;
}

class Library {
    protected books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public getBookDetails(isbn: string): Book | undefined {
        return this.books.find(book => book.isbn === isbn);
    }
}

class DigitalLibrary extends Library {
    readonly website: string;

    constructor(website: string) {
        super();
        this.website = website;
    }

    public listBooks(): string[] {
        return this.books.map(book => book.title);
    }
}   

const myLibrary = new DigitalLibrary("www.mydigitallibrary.com");

myLibrary.addBook({
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    publishedYear: 1925,
    genre: "Novel"
});

myLibrary.addBook({
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780061120084",
    publishedYear: 1960,
    genre: "Novel"
});

console.log(myLibrary.getBookDetails("9780743273565"));
console.log(myLibrary.listBooks());