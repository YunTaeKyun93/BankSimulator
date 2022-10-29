const ParseCase = require("./parseCase");
const ShowBankAction = require("../Action/showBankAction");

class ShowBankParseCase extends ParseCase {
  static expectedCommandPrefix = "show-bank";

  isParsable(command) {
    return command.startsWith(this.constructor.expectedCommandPrefix);
  }
  tryParse(command) {
    if (!this.isParsable(command)) {
      return undefined;
    }
    return new ShowBankAction();
  }
}
module.exports = ShowBankParseCase;
