const Action = require("./action");

class UserEarnsAction extends Action {
  constructor({ userName, earnsAmount }) {
    super();
    this.userName = userName;
    this.earnsAmount = earnsAmount;
  }
  run() {
    const selectUser = this.context.users.find(
      (user) => user.userName == this.userName
    );
    selectUser.userEarns(this.earnsAmount);
    console.log('userEarns',selectUser)
  }
}

module.exports = UserEarnsAction;
