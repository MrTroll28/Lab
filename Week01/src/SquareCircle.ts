import { Shape } from "./Shape";

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape {
    constructor(private side: number) {
        super();
    }

    area(): number {
        return this.side * this.side;
    }
}

const circle1 = new Circle(3);
console.log("Circle Area:", circle1.area());

const square1 = new Square(6);
console.log("Square Area:", square1.area());