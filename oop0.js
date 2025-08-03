class BankAccount {
  #balance = 0; // Private field

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn: $${amount}`);
    } else {
      console.log("Insufficient funds!");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(500);
account.withdraw(200);
console.log("Current Balance:", account.getBalance()); // $300