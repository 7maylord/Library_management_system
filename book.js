class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isBorrowed = false;
    }
    // check
    isBorrowed() {
        return this.isBorrowed;
    }
    
    borrow() {
        this.isBorrowed = true;
    }
    
    return() {
        this.isBorrowed = false;
    }
}

module.exports = Book;