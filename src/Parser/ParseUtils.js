class ParseUtils {
  /**@memo 커맨드가 들어왔을때 파라미터 제외 자름 */
  static getExtra(commandTag, originalCommand) {
    // static 안하니까 오류   ParseUtils.getExtraTokens is not a function or its return value is not iterable
    return originalCommand
      .slice(commandTag.length, originalCommand.length)
      .trim();
  }
  /**@memo 커맨드의 파라미터를 배열에 넣어줌 */
  static getExtraTokens(commandTag, originalCommand) {
    const extra = this.getExtra(commandTag, originalCommand);
    return extra.split(" ");
  }
}

module.exports = ParseUtils;
