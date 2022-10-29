const ParseCase = require("./parseCase");
const ParseUtils = require("./ParseUtils");
const UserUsesAction = require("../Action/userUsesAction");

class UserUsesParseCase extends ParseCase {
  static expectedCommandPrefix = "user-uses";

  isParsable(command) {
    return command.startsWith(this.constructor.expectedCommandPrefix);
  }
  tryParse(command) {
    if (!this.isParsable) {
      return undefined;
    }
    let [userName, usesAmount] = ParseUtils.getExtraTokens(
      this.constructor.expectedCommandPrefix,
      command
    );
    usesAmount = Number(usesAmount);
    console.log("2",command)
    console.log('userUsesON')
    return new UserUsesAction({ userName, usesAmount });
  }
}

module.exports = UserUsesParseCase;
