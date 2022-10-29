const NoMatchingCommandError = require('../noMatchingCommandError');


class Parser {
  #availableCases;

  constructor(aavailableCases = []) {
    this.#availableCases = aavailableCases;
  }
  getAction(command) {
    const availableCases = this.#availableCases;
console.log(command)
    for (let i = 0; i < availableCases.length; i++) {
      const currentCase = availableCases[i];
      const action = currentCase.tryParse(command);
      console.log('currentCase',currentCase);
      console.log('action',action);
      if (action != null) {
        return action;
      }
    }
    throw new NoMatchingCommandError(command);
  }
}


module.exports = Parser;