const ParseCase = require("./parseCase");
const ParseUtils = require("./ParseUtils");
const CreateBankAction = require('../Action/createBankAction');

class CreateBankParseCase extends ParseCase {
  static expectedCommandPrefix = "create-bank";

  isParsable(command) {
    return command.startsWith(this.constructor.expectedCommandPrefix);
  }
  tryParse(command) {
    if (!this.isParsable(command)) {
      return undefined;
    }
    let [bankName, bankInterest, bankInitialBudget] = ParseUtils.getExtraTokens(
      this.constructor.expectedCommandPrefix,
      command
    );
    bankInitialBudget = Number(bankInitialBudget);
    return new CreateBankAction({ bankName, bankInterest, bankInitialBudget });
  }
}

module.exports = CreateBankParseCase;
