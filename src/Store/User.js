class User {
  constructor(userName, userAge, userCountry, userInitialBudget, userPw) {
    this.userName = userName;
    this.userAge = userAge;
    this.userCountry = userCountry;
    this.userInitialBudget = userInitialBudget;
  }
  userEarns(money) {
    this.userInitialBudget += parseInt(money);
  }
  userUses(price) {
    this.userInitialBudget -= parseInt(price);
  }
}
module.exports = User;
