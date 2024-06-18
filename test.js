const Book = require('./classes/book.js'); 
const User = require('./classes/user.js'); 
const Library = require('./classes/library.js'); 

describe('Library Management System', () => {
    let library, book1, book2, book3, user;

    beforeEach(() => {
        // Initialize objects before each test
        library = new Library();
        book1 = new Book("Things Fall Apart", "Chinua Achebe", "9780435272463");
        book2 = new Book("Chosen", "Ted Dekker", "9781595548597");
        book3 = new Book("The Da Vinci Code", "Dan Brown", "9780307474278");
        user = new User("Olumide", "001");

        library.addNewBook(book1);
        library.addNewBook(book2);
        library.addNewBook(book3);
        library.registerMember(user);
    });

    test('should add new books to the library', () => {
        expect(library.books).toHaveLength(3);
        expect(library.books[0].title).toBe("Things Fall Apart");
    });

    test('should register new users', () => {
        expect(library.members).toHaveLength(1);
        expect(library.members[0].name).toBe("Olumide");
    });

    test('should allow a user to borrow a book', () => {
        library.borrowBook(user, "9780435272463");
        expect(user.borrowedBooks).toHaveLength(1);
        expect(user.borrowedBooks[0].title).toBe("Things Fall Apart");
        expect(book1.isBorrowed).toBe(true);
    });

    test('should not allow a user to borrow more than 3 books', () => {
        library.borrowBook(user, "9780435272463");
        library.borrowBook(user, "9781595548597");
        library.borrowBook(user, "9780307474278");
        const result = library.borrowBook(user, "9780435272463");
        expect(result).toBe(false);
        expect(user.borrowedBooks).toHaveLength(3);
    });

    test('should not allow a user to borrow the same book twice', () => {
        library.borrowBook(user, "9780435272463");
        const result = library.borrowBook(user, "9780435272463");
        expect(result).toBe(false);
        expect(user.borrowedBooks).toHaveLength(1);
    });

    test('should allow a user to return a book', () => {
        library.borrowBook(user, "9780435272463");
        library.returnBook(user, "9780435272463");
        expect(user.borrowedBooks).toHaveLength(0);
        expect(book1.isBorrowed).toBe(false);
    });

    test('should retrieve information about a book', () => {
        const bookInfo = library.getBookInfo("9780435272463");
        expect(bookInfo.title).toBe("Things Fall Apart");
        expect(bookInfo.author).toBe("Chinua Achebe");
    });

    test('should indicate when a book is already borrowed', () => {
        library.borrowBook(user, "9780435272463");
        const result = library.borrowBook(user, "9780435272463");
        expect(result).toBe(false);
    });

});
