export class BankAccount {
    balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        this.balance -= amount;
    }

    getBalance(): number {
        return this.balance;
    }
}

const account1 = new BankAccount(1000);
console.log(`Current Balance: ${account1.getBalance()}`);
account1.deposit(500);
console.log(`Current Balance: ${account1.getBalance()}`);
account1.withdraw(200);
console.log(`Current Balance: ${account1.getBalance()}`);