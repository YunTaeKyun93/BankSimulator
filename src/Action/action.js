const UserNotFoundByNameError = require('../Error/userNotFoundByNameError');
const BankNotFoundByNameError = require('../Error/bankNotFoundByNameError');

class Action {
  run() {}
  findUserByName(userName) {
    // try 문으로??? 
    const user = this.context.users.find(
      (currentUser) => currentUser.userName === userName
    );
    if (user == null) {
      throw new UserNotFoundByNameError(userName);
    }

    return user;
  }

  findBankByName(bankName) {
    const bank = this.context.banks.find(
      (currentBank) => currentBank.bankName === bankName
    );
    if (bank == null) {
      throw new BankNotFoundByNameError(bankName);
    }
    return bank;
  }
}
module.exports = Action;
