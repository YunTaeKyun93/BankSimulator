const ParseCase = require("./parseCase");
const NoAction = require('../Action/noAction');

class IgnoreEmptyLineParseCase extends ParseCase {
    isParsable(command) {
        return command.trim().length === 0;
    }

    tryParse(command) {
        if (!this.isParsable(command)) {
            return undefined;
        }

        return new NoAction();
    }
}

module.exports = IgnoreEmptyLineParseCase;
