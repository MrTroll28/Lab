export class Account {
    private accountNumber: string;
    public name: string;
    readonly balance: number;

    constructor(accountNumber: string, name: string, balance: number) {
        this.accountNumber = accountNumber;
        this.name = name;
        this.balance = balance;
    }

    getAccountNumber(): string {
        return this.accountNumber;
    }

    getName(): string {
        return this.name;
    }

    getBalance(): number {
        return this.balance;
    }

    displayInfo(): void {
        console.log(`Account Number: ${this.getAccountNumber()}, Name: ${this.getName()}, Balance: ${this.getBalance()}`);
    }
}

const account1 = new Account("123456789", "Đặng Khôi Nguyên", 1000);
account1.displayInfo();
