const Book = require('./book.js'); 
const User = require('./user.js'); 
const Library = require('./library.js'); 

// Create a library
const library = new Library();

// Create some books
const book1 = new Book("Things Fall Apart", "Chinua Achebe", "9780435272463");
const book2 = new Book("Chosen", "Ted Dekker", "9781595548597");
const book3 = new Book("The Da Vinci Code", "Dan Brown", "9780307474278");

// Add books to the library
library.addNewBook(book1);
library.addNewBook(book2);
library.addNewBook(book3);

// Create a user
const user = new User("Olumide", "001");

// Register the user to the library
library.registerMember(user);

// User borrows books
library.borrowBook(user, "9780435272463");
library.borrowBook(user, "9781595548597");

// User tries to borrow a third book
library.borrowBook(user, "9780307474278");

// User returns a book
library.returnBook(user, "9780435272463");

// User borrows the third book again
library.borrowBook(user, "9780307474278");

// User tries to borrow more than 3 books
library.borrowBook(user, "9780435272463"); // Should not be allowed since the limit is 3

// Get book information
console.log(library.getBookInfo("9780435272463"));
console.log(library.getBookInfo("9781595548597"));
console.log(library.getBookInfo("9780307474278"));
