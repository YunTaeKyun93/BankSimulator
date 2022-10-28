class NoMatchingCommandError extends Error {
    constructor(command) {
        super(`해석할 수 없는 명령어입니다: ${command}`);

        this.command = command;
    }
}

module.exports = NoMatchingCommandError;
