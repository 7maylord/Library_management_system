class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }

    addNewBook(book) {
        this.books.push(book);
    }

    registerMember(user) {
        this.members.push(user);
    }

    borrowBook(user, isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        if (!book) {
            console.log(`Book with ISBN "${isbn}" not found in the library.`);
            return false;
        }
        const result = user.borrowBook(book);
        if (result) {
            console.log(`${user.name} has borrowed "${book.title}".`);
        }
        return result;
    }

    returnBook(user, isbn) {
        const book = user.peekBook(isbn);
        if (!book) {
            console.log(`Book with ISBN "${isbn}" not found in ${user.name}'s borrowed books.`);
            return null;
        }
        user.returnBook(isbn);
        return book;
    }

    getBookInfo(isbn) {
        return this.books.find(book => book.isbn === isbn);
    }
}

module.exports = Library;
