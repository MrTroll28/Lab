export class Book {
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(): string {
        return `${this.title} by ${this.author} was published in ${this.year}.`;
    }
}

const book1 = new Book("Sách haha", "Đặng Khôi Nguyên", 2323);
console.log(book1.getSummary());
