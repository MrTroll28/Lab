"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(accountNumber, name, balance) {
        this.accountNumber = accountNumber;
        this.name = name;
        this.balance = balance;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    getName() {
        return this.name;
    }
    getBalance() {
        return this.balance;
    }
    displayInfo() {
        console.log(`Account Number: ${this.getAccountNumber()}, Name: ${this.getName()}, Balance: ${this.getBalance()}`);
    }
}
exports.Account = Account;
const account1 = new Account("123456789", "Đặng Khôi Nguyên", 1000);
account1.displayInfo();
