const User = require("./User"); // 함수처럼 생각하자
const Bank = require("./Bank");
class Parser {
  constructor() {
    this.users = [];
    this.banks = [];
    this.availableCommands = {
      createUser: "create-user",
      createBank: "create-bank",
      userEarns: "user-earns",
      userUses: "user-uses",
      userDepositsToBank: "user-deposits-to-bank",
      userWithdrawsFromBank: "user-withdraws-from-bank",
      bankIssuesInterestOfDays: "bank-issues-interest-of-days",
      overallInfo: "overall-info"

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

  findUserByName(userName) {
    const user = this.users.find(
      (currentUser) => currentUser.userName === userName
    );

    if (user == null) {
      throw new Error(`${userName}을 이름으로 가진 유저를 찾을 수 없습니다.`);
    }

    return user;
  }

  findBankByName(bankName) {
    const bank = this.banks.find(
      (currentBank) => currentBank.bankName === bankName
    );
    if (bank == null) {
      throw new Error(`${bankName}을 이름으로 가진 은행을 찾을 수 없습니다.`);
    }
    return bank;
  }
  interpret(command) {
    const users = this.users;
    const banks = this.banks;
    /* 
        테스트 용도입니다!
        */
    if (command === "hi") {
      console.log("Long time no see, my dorable dude!");
      return;
    }

    if (command.startsWith(this.availableCommands.createUser)) {
      // 사용자로부터 데이터를 읽음
      let [userName, userAge, userCountry, userInitialBudget, userPw] =
        this.getExtraTokens(this.availableCommands.createUser, command);
      userAge = Number(userAge); // 원래는 NaN인지 예외처리가 필요하지만, 예외를 아직 안 배웠으므로 패스
      userInitialBudget = Number(userInitialBudget);

      // 유저를 생성 및 삽입
      let newUser = new User(
        userName,
        userAge,
        userCountry,
        userInitialBudget,
        userPw
      );
      users.push(newUser);

      console.log(users);
      return;
    }

    if (command.startsWith(this.availableCommands.createBank)) {
      let [bankName, interest, bankInitialProperty] = this.getExtraTokens(
        this.availableCommands.createBank,
        command
      );
      interest = Number(interest);
      bankInitialProperty = Number(bankInitialProperty);

      let newBank = new Bank(bankName, interest, bankInitialProperty);
      banks.push(newBank);

      console.log(banks);
      return;
    }

    if (command.startsWith(this.availableCommands.userEarns)) {
      let [userName, money] = this.getExtraTokens(
        this.availableCommands.userEarns,
        command
      );
      money = Number(money);

      // 유저를 찾는 것
      const user = this.findUserByName(userName);

      // 돈을 버는 것
      user.userEarns(money);

      // 현재 상황 출력
      console.log(
        `${user.userName}의 자산에서 ${money}원 입금 되었습니다. 유저자산 ${user.userInitialBudget}`
      );

      return;

      // 다른 것과 식별할 수 있는 변수명, 그러면서 짧으면
      // period discountAmount userKind depositAmount
      // 다른 것과 식별이 안 되는 변수명
      // date number scale int decimal string
    }

    if (command.startsWith(this.availableCommands.userUses)) {
      let [userName, money] = this.getExtraTokens(
        this.availableCommands.userUses,
        command
      );
      money = Number(money);

      // 유저를 찾는 것
      const user = this.findUserByName(userName);
      // 유저가 돈을 쓰는 것
      user.userUses(money);

      // 현재 상황 출력
      console.log(
        `${user.userName}의 자산에서 ${money}원 출금 되었습니다. 유저자산 ${user.userInitialBudget}`
      );

      return;
    }

    if (command.startsWith(this.availableCommands.userDepositsToBank)) {
      let [userName, bankName, amount] = this.getExtraTokens(
        this.availableCommands.userDepositsToBank,
        command
      );
      amount = Number(amount);

      const user = this.findUserByName(userName);
      const bank = this.findBankByName(bankName);

      bank.userDepositsToBank(user, amount);

      console.log(
        `${userName}님께서 ${bankName}의 계좌에 ${amount}원 입금 하였습니다.`
      );

      return;
    }
    if (command.startsWith(this.availableCommands.userWithdrawsFromBank)) {
      let [userName, bankName, amount] = this.getExtraTokens(
        this.availableCommands.userWithdrawsFromBank,
        command
      );
      amount = Number(amount);

      const user = this.findUserByName(userName);
      const bank = this.findBankByName(bankName);

      bank.userWithdrawsFromBank(user, amount);

      console.log(
        `${userName}님께서 ${bankName}의 계좌에 ${amount}원 출금 하였습니다.`
      );

      return;
    }

    if (command.startsWith(this.availableCommands.bankIssuesInterestOfDays)) {
      let [bankName, periodInDays] = this.getExtraTokens(
        this.availableCommands.bankIssuesInterestOfDays,
        command
      );
      periodInDays = Number(periodInDays);

      const bank = this.findBankByName(bankName);
      bank.bankIssuesInterestOfDays(periodInDays);

      return;
    }

    if (command.startsWith(this.availableCommands.overallInfo)) {
      const printUser = (user) => {
        const printBankAccount = (bank) => {
          const userBankAccount = bank.getAccountByUserNameSafely(user.userName);

          if (userBankAccount == null) {
            return;
          }

          console.log(`  ${bank.bankName}: ${userBankAccount.balance}`);
        };

        console.log(`User(name: ${user.userName}, country: ${user.userCountry}, age: ${user.userAge}, budget: ${user.userInitialBudget})`);

        banks.forEach(printBankAccount);
      };

      const printBank = (bank) => {
        console.log(`Bank(name: ${bank.bankName}, interest: ${bank.interest}, budget: ${bank.bankProperty})`);
      };




      console.log('**********');
      console.log('유저');
      console.log('**********');

      users.forEach(printUser);

      banks.forEach(printBank);

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
