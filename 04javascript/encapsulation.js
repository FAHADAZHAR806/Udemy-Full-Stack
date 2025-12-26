class Bank {
  #balance = 0;
  deposit() {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return this.#balance;
  }
}

let TotalBalance = new Bank();
console.log(TotalBalance.getBalance());
