const ParseCase = require("./parseCase");
const ParseUtils = require("./ParseUtils");
const CreateUserAction = require("../Action/createUserAction");

class CreateUserParseCase extends ParseCase {
  static expectedCommandPrefix = "create-user";
  /**  @memo 커맨드가 지정한 걸로 시작했는지 여부 체크 */
  isParsable(command) {
    return command.startsWith(this.constructor.expectedCommandPrefix);
  }
  tryParse(command) {
    if (!this.isParsable(command)) {
      return undefined;
    }
    let [userName, userAge, userCountry, userInitialBudget] = ParseUtils.getExtraTokens(
      this.constructor.expectedCommandPrefix,
      command
    );
    userAge = Number(userAge);
    userInitialBudget = Number(userInitialBudget);

    return new CreateUserAction({ userName, userAge, userCountry, userInitialBudget });
  }
}

module.exports = CreateUserParseCase;
