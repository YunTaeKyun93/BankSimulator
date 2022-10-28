const Action = require("./action");

class UserUsessAction extends Action {
  constructor({ name, usesAmount }) {
    super();
    this.name = name;
    this.usesAmount = usesAmount;
  }
  run() {
    const userUses = (user) => {
        const selectUser = this.context.users.find(user=>user.name == this.name);
        selectUser.userUses(this.usesAmount);
    };
  }
}

module.exports = UserUsessAction;
