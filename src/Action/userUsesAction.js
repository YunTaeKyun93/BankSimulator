const Action = require("./action");

class UserUsesAction extends Action {
  constructor({ userName, usesAmount }) {
    super();
    this.userName = userName;
    this.usesAmount = usesAmount;
  }
  run() {
    const selectUser = this.context.users.find(
      (user) => user.userName == this.userName
    );
    selectUser.userUses(this.usesAmount);
    console.log('userUses',selectUser)
  }
}

module.exports = UserUsesAction;
