const ParseCase = require("./parseCase");
const ShowUserAction = require("../Action/showUserAction");

class ShowUserParseCase extends ParseCase {
  static expectedCommandPrefix = "show-user";

  isParsable(command) {
    return command.startsWith(this.constructor.expectedCommandPrefix);
  }
  tryParse(command) {
    if (!this.isParsable(command)) {
      return undefined;
    }
    return new ShowUserAction();
  }
}

module.exports = ShowUserParseCase;
