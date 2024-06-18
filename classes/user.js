class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        // this ensures that the user cannot borrow the same book twice
        //if (this.borrowedBooks.length >= 3 || this.borrowedBooks.includes(book))
        if (this.borrowedBooks.length >= 3 || this.borrowedBooks.some(b => b.isbn === book.isbn)) {
            console.log(`${this.name} cannot borrow more than 3 books or the same book twice.`);
            return false;
        }
        if (book.isBorrowed) {
            console.log(`The book "${book.title}" is already borrowed.`);
            return false;
        }
        this.borrowedBooks.push(book);
        book.borrow();
        return true;
    }

    returnBook(isbn) {
        const bookIndex = this.borrowedBooks.findIndex(book => book.isbn === isbn);
        if (bookIndex === -1) {
            console.log(`No book with ISBN "${isbn}" found in ${this.name}'s borrowed books.`);
            return;
        }
        const book = this.borrowedBooks.splice(bookIndex, 1)[0];
        book.return();
        console.log(`${this.name} has returned "${book.title}".`);
    }

    peekBook(isbn) {
        return this.borrowedBooks.find(book => book.isbn === isbn);
    }
}

module.exports = User;
