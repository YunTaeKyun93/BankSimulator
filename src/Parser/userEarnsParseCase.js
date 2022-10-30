const ParseCase = require("./parseCase");
const ParseUtils = require("./ParseUtils");
const UserEarnsAction = require("../Action/userEarnsAction");

class UserEarnsParseCase extends ParseCase {
  static expectedCommandPrefix = "user-earns";

  isParsable(command) {
    return command.startsWith(this.constructor.expectedCommandPrefix);
  }
  tryParse(command) {
    if (!this.isParsable(command)) {
      return undefined;
    }
    let [userName, earnsAmount] = ParseUtils.getExtraTokens(
      this.constructor.expectedCommandPrefix,
      command
    );
    earnsAmount = Number(earnsAmount);
    console.log("1",command)
    console.log('userEarnsON')
    return new UserEarnsAction({ userName, earnsAmount });
  }
}

module.exports = UserEarnsParseCase;
