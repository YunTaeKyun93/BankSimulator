const Action = require("./action");

class UserEarnsAction extends Action {
  constructor({ name, earnsAmount }) {
    super();
    this.name = name;
    this.earnsAmount = earnsAmount;
  }
  run() {
    const selectUser = this.context.users.find(
      (user) => user.name == this.name
    );
    selectUser.userEarns(this.earnsAmount);
  }
}

module.exports = UserEarnsAction;
