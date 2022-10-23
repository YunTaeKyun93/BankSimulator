class BankAccount {
  constructor(user, bankName, initialBalance) {
    this.user = user;
    this.bankName = bankName;
    this.balance = initialBalance;
  }
}

module.exports = BankAccount;
