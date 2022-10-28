const Action = require("./action");

class ShowBankAction extends Action {
  constructor() {
    super();
  }
  run() {
    const showBank = (bank) => {
      console.log(bank);
    };
    this.context.banks.forEach(showBank);
  }
}

module.exports = ShowBankAction;