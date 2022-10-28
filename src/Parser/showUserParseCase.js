const ShowUserAction = require("../Action/showUserAction");
const ParseCase = require("./parseCase");


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
