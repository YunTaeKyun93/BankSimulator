// 클래스로 따로 빼서했으므로 tryParseAndRun()에 this.parser.getAction()그대로 가능한가..??

class ParseAndRun {
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
}

module.export = ParseAndRun;
