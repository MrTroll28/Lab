"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    displayInfo() {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
        console.log(`Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`);
    }
}
exports.Rectangle = Rectangle;
const rectangle1 = new Rectangle(3, 6);
rectangle1.displayInfo();
