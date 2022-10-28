const NoMatchingCommandError = require('../noMatchingCommandError');


class Parser {
  #availableCases;

  constructor(aavailableCases = []) {
    this.#availableCases = aavailableCases;
  }
  getAction(command) {
    const availableCases = this.#availableCases;

    for (let i = 0; i < availableCases.length; i++) {
      const currentCase = availableCases[i];
      const action = currentCase.tryParse(command);
      if (action != null) {
        return action;
      }
    }
    throw new NoMatchingCommandError(command);
  }
}


module.exports = Parser;