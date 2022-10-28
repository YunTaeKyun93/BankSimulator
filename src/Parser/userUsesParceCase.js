const ParseCase = require("./parseCase");
const ParseUtils = require("./ParseUtils");
const UserUsesParseAction = require("../Action/userUsesAction");

class UserUsesParseCase extends ParseCase {
  static expectedCommandPrefix = "user-uses";

  isParsable(command) {
    return command.startsWith(this.constructor.expectedCommandPrefix);
  }
  tryParse(command) {
    if (!this.isParsable) {
      return undefined;
    }
    let [name, usesAmount] = ParseUtils.getExtraTokens(
      this.constructor.expectedCommandPrefix,
      command
    );
    earnsAmount = Number(earnsAmount);
    return new UserUsesParseAction({ name, earnsAmount });
  }
}

module.exports = UserUsesParseCase;
