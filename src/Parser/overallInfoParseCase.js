const ParseCase = require("./parseCase");
const OverallInfoAction = require('../Action/overallInfoAction');

class OverallInfoParseCase extends ParseCase {
  static expectedCommandPrefix = "overall-info";

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

module.exports = OverallInfoParseCase;
