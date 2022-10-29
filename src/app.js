const ReadLine = require("./read-line");
const Parser = require("./Parser/paserReboot");
const Context = require("./Store/store");
const ParseAndRun = require("./parseAndRun");
// const Parser = require("./parser");
const NoMatchingCommandError = require("./noMatchingCommandError");

const CreateUserParseCase = require("./Parser/createUserParseCase");
const ShowUserParseCase = require("./Parser/showUserParseCase");
const CreateBankParseCase = require("./Parser/createBankParseCase");
const ShowBankParseCase = require("./Parser/showBankParseCase");
const UserEarnsParseCase = require("./Parser/userEarnsParseCase");
const UserUsesParseCase = require("./Parser/userUsesParceCase");
const UserDepositsToBankParseCase = require("./Parser/userDepositsToBankParseCase");
const UserWithdrawsFromBankParseCase = require("./Parser/userWithdrawsFromBankParseCase");
const BankIssuesInterestOfDaysParseCase = require("./Parser/bankIssuesInterestOfDaysParseCase");

const Test = require("./test");

class App {
  getParseCase() {
    return [
      new CreateUserParseCase(),
      new CreateBankParseCase(),
      new ShowUserParseCase(),
      new ShowBankParseCase(),
      new UserEarnsParseCase(),
      new UserUsesParseCase(),
      new UserDepositsToBankParseCase(),
      new UserWithdrawsFromBankParseCase(),
      new BankIssuesInterestOfDaysParseCase()
    ];
  }

  tryParseAndRun(command) {
    const action = this.parser.getAction(command);
    action.context = this.context; // 이 부분 모르겠음
    action.run(); // 이 부분 모르겠음
  }
  parseAndRun(command) {
    try {
      this.tryParseAndRun(command);
    } catch (error) {
      if (error instanceof NoMatchingCommandError) {
        console.error("잘못된 명령어를 입력하셨습니다. 방금 입력한 명령어:");
        console.log(e.command);
        return;
      }
      throw error;
    }
  }
  run() {
    this.readLine = new ReadLine();
    this.context = new Context();
    this.parser = new Parser(this.getParseCase());
    // this.parseAndRun = new ParseAndRun();

    const readLine = this.readLine;
    const context = this.context;
    const parser = this.parser;
    // const parseAndRun = this.ParseAndRun;

    readLine.registerCallback((text) => this.parseAndRun(text));
  }
}

module.exports = App;
