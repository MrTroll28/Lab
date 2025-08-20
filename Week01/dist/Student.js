"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Grade: ${this.grade}`);
    }
}
const student1 = new Student("Đặng Khôi Nguyên", 20, 10);
student1.displayInfo();
