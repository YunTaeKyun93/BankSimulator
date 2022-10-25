const BankAccount = require("./bank-account");

class Bank {
  constructor(bankName, interest, bankInitialProperty) {
    this.bankName = bankName;
    this.interest = interest;
    this.bankInitialProperty = bankInitialProperty;
    this.bankProperty = bankInitialProperty;
    this.userAccounts = [];
  }

  createBankAccountIfDoesNotExist(user) {
    let bankAccount = this.userAccounts.find(
      (userAccount) => userAccount.user === user
    );

    if (bankAccount == undefined) {
      const newBankAccount = new BankAccount(user);
      this.userAccounts.push(newBankAccount);
      bankAccount = newBankAccount;
    }

    return bankAccount;
  }

  userDepositsToBank(user, amount) {
    const bankAccount = this.createBankAccountIfDoesNotExist(user);

    // user.userInitialBudget -= amount; //
    this.bankProperty += amount; // 은행 잔고
    bankAccount.balance += amount; // 유저의 은행 계좌잔고

    user.userInitialBudget -= amount;
  }

  userWithdrawsFromBank(user, amount) {
    const bankAccount = this.createBankAccountIfDoesNotExist(user);
    this.bankProperty -= amount;
    bankAccount.balance -= amount;

    user.userInitialBudget += amount;
  }

  bankIssuesInterestOfDays(period) {
    if (period === 0) {
      return;
    }

    this.userAccounts.forEach((userAccount) => {
      userAccount.balance += userAccount.balance * (this.interest / 100);
    });

    this.bankIssuesInterestOfDays(period - 1);
  }

  getAccountByUserNameSafely(userName) {
    return this.userAccounts.find(currentAccount => currentAccount.user.userName === userName);
  }
}

module.exports = Bank;
