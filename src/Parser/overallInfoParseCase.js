const ParseCase = require("./parseCase");

class OverallInfoParseCase extends ParseCase {
  static expectedCommandPrefix = "create-user";

  isParsable(command) {
    return command.startsWith(this.constructor.expectedCommandPrefix);
  }
  tryParse(command) {
    if (!this.isParsable(command)) {
      return undefined;
    }
    return new OverallInfoAction()
  }

  
}
