"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} by ${this.author} was published in ${this.year}.`;
    }
}
exports.Book = Book;
const book1 = new Book("Sách haha", "Đặng Khôi Nguyên", 2323);
console.log(book1.getSummary());
