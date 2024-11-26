/*
    Encapsulamento => É a forma de impedir que uma parte da classe não seja acessível fora do contexto da classe
*/

class Account {
    #balance = 0;
    #numberAccount;

    constructor(holderName, numberAccount, typeAccount) {
        this.holderName = holderName;
        this.#numberAccount = numberAccount;
        this.typeAccount = typeAccount;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(value) {
        if (typeof value !== 'number') return "The value must be number type";
        if (value > 0) {
            this.#balance += value;
            return `Deposit made successfully!`;
        }
        return "Invalid deposit!";
    }

    withdraw(value) {
        if (value > 0 && value <= this.#balance) {
            this.#balance -= value;
            return `Withdrawal of R$${value} successfully performed.`;
        }

        return `Insufficient balance!`;
    }
}

const myAccount = new Account('John Doe', '123456', 'Corrente');

console.log(myAccount);

console.log(myAccount.getBalance()); // 0 
console.log(myAccount.deposit(250)); // Deposit made successfully!
console.log(myAccount.getBalance()); // 250
console.log(myAccount.withdraw(400)); // Insufficient balance!
console.log(myAccount.withdraw(130)); // Withdrawal of R$130 successfully performed.
console.log(myAccount.getBalance()); // 120
