const ParseCase = require("./parseCase");
const ParseUtils = require("./ParseUtils");
const UserWithdrawsFromBankAction = require('../Action/userWithdrawsFromBankAction');
class UserWithdrawsFromBankParseCase extends ParseCase {
  static expectedCommandPrefix = "user-withdraws-from-bank";

  isParsable(command) {
    return command.startsWith(this.constructor.expectedCommandPrefix);
  }
  tryParse(command) {
    if (!this.isParsable(command)) {
      return undefined;
    }
    let [userName, bankName, depositAmount] = ParseUtils.getExtraTokens(
      this.constructor.expectedCommandPrefix,
      command
    );
    depositAmount = Number(depositAmount);

    return new UserWithdrawsFromBankAction({userName,bankName,depositsAmout: depositAmount})
  }
}

module.exports = UserWithdrawsFromBankParseCase;
