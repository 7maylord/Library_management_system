# Library Management System Documentation

## Requirements

-A book has title, author and unique ISBN(International Standard Book Number).

-User should be able to retrieve information about a book.

-A User is a library member, and has a name, unique ID and a list of borrowed books.

-User should be able to borrow and return books.

-The library has a collection of users and a list of registered books.

-Library should be able to add new books to the collection and register new users.

-A member can borrow a maximum of three books at a time.

## Identify objects

-User

-Book

-Library

## Identify object attributes

-**User**

    -Name: string

    -Id: string

    -borrowedBooks: Array[Books]

-**Book**

    -Title: string

    -Author: string

    -ISBN: string

    -Id: string

    -Borrowed: boolean

-**Library**

    -Books

    -Members

## Identify object methods

-**User**

    -peakBook(ISBN): Book

    -returnBook(ISBN)

-**Book**

    -isBorrowed(): boolean

-**Library**

    -registerMembers(user)

    -addNewBook(book)

    -borrowBook(user, ISBN): (if user.borrowedBooks.length >= 3) ? false : true

## Identify relationships

    -Book and User => User can have many books

    -Library and Books => Library can have many books

    -Library and user => Library can have many users


