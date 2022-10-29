class User {
  constructor(userName, userAge, userCountry, userInitialBudget, userPw) {
    this.userName = userName;
    this.userAge = userAge;
    this.userCountry = userCountry;
    this.userInitialBudget = userInitialBudget;
  }
  userEarns(earnsAmount) {
    this.userInitialBudget += parseInt(earnsAmount);
    console.log('earnsAmout')
  }
  userUses(usesAmount) {
    this.userInitialBudget -= parseInt(usesAmount)
    console.log('usesAmount');
  }
}
module.exports = User;
