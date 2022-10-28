const ParseCase = require("./parseCase");
const ShowBankParseAction = require("../Action/showBankAction");

class ShowBankParseCase extends ParseCase {
  static expectedCommandPrefix = "show-bank";

  isParsable(command) {
    return command.startsWith(this.constructor.expectedCommandPrefix);
  }
  tryParse(command) {
    if (!this.isParsable) {
      return undefined;
    }
    return new ShowBankParseAction();
  }
}
module.exports = ShowBankParseCase;
