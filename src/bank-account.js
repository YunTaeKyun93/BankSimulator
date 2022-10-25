class BankAccount {
  constructor(user, initialBalance = 0) {
    this.user = user;
    this.balance = initialBalance;
  }
}

module.exports = BankAccount;
