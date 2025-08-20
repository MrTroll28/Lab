import { Person } from "./Person";

class Student extends Person {
  grade: number;

  constructor(name: string, age: number, grade: number) {
    super(name, age);
    this.grade = grade;
  }

  displayInfo(): void {
    super.displayInfo();
    console.log(`Grade: ${this.grade}`);
  }
}

const student1 = new Student("Đặng Khôi Nguyên", 20, 10);
student1.displayInfo();
