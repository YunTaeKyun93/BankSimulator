class User {
  constructor(userName, userAge, userCountry, userInitialBudget, userPw) {
    this.userName = userName;
    this.userAge = userAge;
    this.userCountry = userCountry;
    this.userInitialBudget = userInitialBudget;
    this.userId = 0; 
    this.userPw = userPw;
    // 만약 이름과 나이와 국가가 같은 유저가 생성되면 중복이 아닌 아이디로 구별 하기위해서
    // userId는 계좌번호 역할도 됨 
    // 유저가 관련된 모든 함수는 pw가 일치 할 시 하는 게 더 재밌어 보임
  }
  userEarns(money) {
    this.userInitialBudget += parseInt(money);
  }
  userUses( price ) {
    this.userInitialBudget -= parseInt(price);
  }
}
module.exports = User;
