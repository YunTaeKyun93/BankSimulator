const User = require("../Store/User");
const Action = require("./action");

class CreateUserAction extends Action {
  constructor({ userName, userAge, userCountry, userInitialBudget }) {
    super();
    this.userName = userName;
    this.userAge = userAge;
    this.userCountry = userCountry;
    this.userInitialBudget = userInitialBudget;
  }
  run() {
    const newUser = new User(
      this.userName,
      this.userAge,
      this.userCountry,
      this.userInitialBudget
    );
    this.context.users.push(newUser);
  }
}

module.exports = CreateUserAction;
