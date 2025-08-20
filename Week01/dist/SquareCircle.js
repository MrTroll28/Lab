"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
class Square extends Shape_1.Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
const circle1 = new Circle(3);
console.log("Circle Area:", circle1.area());
const square1 = new Square(6);
console.log("Square Area:", square1.area());
