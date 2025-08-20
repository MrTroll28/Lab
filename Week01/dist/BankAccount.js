"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
}
exports.BankAccount = BankAccount;
const account1 = new BankAccount(1000);
console.log(`Current Balance: ${account1.getBalance()}`);
account1.deposit(500);
console.log(`Current Balance: ${account1.getBalance()}`);
account1.withdraw(200);
console.log(`Current Balance: ${account1.getBalance()}`);
