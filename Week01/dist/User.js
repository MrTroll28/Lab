"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor() {
        this.name = "";
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
exports.User = User;
const nameInput = "Đặng Khôi Nguyên";
const user1 = new User();
user1.setName(nameInput);
console.log(user1.getName());
