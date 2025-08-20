export class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    displayInfo(): void {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
        console.log(`Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`);
    }
}

const rectangle1 = new Rectangle(3, 6);
rectangle1.displayInfo();