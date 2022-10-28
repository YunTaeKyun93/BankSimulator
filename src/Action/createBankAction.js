const Action = require("./action");
const Bank = require("../Store/Bank");

class CreateBankAction extends Action {
  constructor({ bankName, bankInterest, bankInitialBudget }) {
    super();
    this.bankName = bankName;
    this.bankInterest = bankInterest;
    this.bankInitialBudget = bankInitialBudget;
  }

  run() {
    const bank = new Bank(this.bankName, this.bankInterest, this.bankInitialBudget);
    this.context.banks.push(bank);
  }
}

module.exports = CreateBankAction;
