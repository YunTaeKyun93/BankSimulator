const ParseCase = require("./parseCase");
const ParseUtils = require("./ParseUtils");
const UserDepositsToBankAction = require('../Action/userDepositsToBankAction');


class UserDepositsToBankParseCase extends ParseCase {
  static expectedCommandPrefix = "user-deposits-to-bank";

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

    return new UserDepositsToBankAction({userName,bankName,depositsAmout: depositAmount})
  }
}

module.exports = UserDepositsToBankParseCase;
