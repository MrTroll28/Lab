export class User {
    private name: string;

    constructor() {
        this.name = "";
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}

const nameInput = "Đặng Khôi Nguyên";
const user1 = new User();
user1.setName(nameInput);
console.log(user1.getName());
