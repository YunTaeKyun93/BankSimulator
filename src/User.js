
class User {
  constructor(userName, userAge, userCountry, userInitialBudget) {
    this.userName = userName;
    this.userAge = userAge;
    this.userCountry = userCountry;
    this.userInitialBudget = userInitialBudget;
  }
  userEarns(name, money) { 
    this.userInitialBudget += parseInt(money)

  }
  userUses() {}
}
