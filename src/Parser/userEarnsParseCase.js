const ParseCase = require("./parseCase");
const ParseUtils = require("./ParseUtils");
const UserEarnsParseAction = require("../Action/userEarnsAction");
class UserEarnsParseCase extends ParseCase {
  static expectedCommandPrefix = "user-earns";

  isParsable(command) {
    return command.startsWith(this.constructor.expectedCommandPrefix);
  }
  tryParse(command) {
    if (!this.isParsable) {
      return undefined;
    }
    let [name, earnsAmount] = ParseUtils.getExtraTokens(
      this.constructor.expectedCommandPrefix,
      command
    );
    earnsAmount = Number(earnsAmount);
    return new UserEarnsParseAction({ name, earnsAmount });
  }
}

module.exports = UserEarnsParseCase;
