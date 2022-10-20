
class Parser {
  constructor() {
    this.users = [];

    this.availableCommands = {
      createUser: "create-user",
      createBank: "create-bank"
      // todo 더 많은 커맨드를 추가하세요
    };
  }

  /*
    커맨드의 뒷 부분만을 구합니다.
    예를 들어, "create-user Jack 24 Korea 2000"이 주어진다면,
    "Jack 24 Korea 2000" <- 이 부분만을 리턴합니다.

    trim은 커맨드 바로 뒤의 스페이스를 지우기 위해 사용했습니다. 
    */
  getExtra(commandTag, originalCommand) {
    return originalCommand
      .slice(commandTag.length, originalCommand.length)
      .trim();
  }
cl
  /*
    getExtra()를 통해서 커맨드의 뒷 부분을 구하고, 이를 공백문자 기준으로 스플릿합니다.
    다음과 같이 사용할 것으로 기대하고 있습니다.

    let [userName, userAge, userCountry, userInitialBudget] = this.getExtraTokens(this.availableCommands.createUser, command);
    userAge = Number(userAge); // 나이와 예산은 문자열이 아닌 숫자이어야하므로
    userInitialBudget = Number(userInitialBudget);
    */
  getExtraTokens(commandTag, originalCommand) {
    const extra = this.getExtra(commandTag, originalCommand);
    return extra.split(" ");
  }

  interpret(command) {
   
    /* 
        테스트 용도입니다!
        */
    if (command === "hi") {
      console.log("Long time no see, my dorable dude!");
      return;
    }

    if (command.startsWith(this.availableCommands.createUser)) {
      let [userName, userAge, userCountry, userInitialBudget] =
        this.getExtraTokens(this.availableCommands.createUser, command);
      userAge = Number(userAge); // 원래는 NaN인지 예외처리가 필요하지만, 예외를 아직 안 배웠으므로 패스
      userInitialBudget = Number(userInitialBudget);
      let newUser = new User(userName, userAge, userCountry, userInitialBudget);
      this.users.push(newUser);
      console.log(this.users);
      // todo 해당 유저 데이터를 처리할 것
      return;
    }

    if (command.startsWith(this.availableCommands.createBank)) {
      // todo
      return;
    }

    // 위에서 어떠한 커맨드에도 해당하지 않고, return되지 않았다면,
    console.error(
      "잘못된 커맨드를 입력하신 것으로 보입니다. 일치하는 커맨드를 찾을 수 없음."
    );

    // todo: 모든 커맨드에 대해서 적절한 처리를 할 것
  }
}

module.exports = Parser;
