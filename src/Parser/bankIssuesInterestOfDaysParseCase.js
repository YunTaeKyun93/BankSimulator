const BankIssuesInterestOfDaysAction = require("../Action/bankIssuesInterestOfDaysAction");
const ParseCase = require("./parseCase");
const ParseUtils = require("./ParseUtils");

class BankIssuesInterestOfDaysParseCase extends ParseCase {
  static expectedCommandPrefix = "bank-issues-interest-of-days";

  isParsable(command) {
    return command.startsWith(
      BankIssuesInterestOfDaysParseCase.expectedCommandPrefix
    );
  }
  tryParse(command) {
    if (!this.isParsable(command)) {
      return undefined;
    }
    let [bankName, interestPeriod] = ParseUtils.getExtraTokens(
      this.constructor.expectedCommandPrefix,
      command
    );
    return new BankIssuesInterestOfDaysAction({bankName,interestPeriod});
  }
}

module.exports = BankIssuesInterestOfDaysParseCase;
