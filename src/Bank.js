//create-bank (이름) (이자율(백분율)) (초기자산)
class Bank {
  constructor(
    bankName,
    interest,
    bankProperty,
    userList,
    userName,
    userInitialBudget
  ) {
    this.bankName = bankName;
    this.interest = interest;
    this.bankProperty = bankProperty;
    this.userList = [];
     // 하고자 하는 거 최초로 유저가 은행에 돈을 예치할 때 userName과 userInitialBudget이라는 
     // 키를 가진 객체 형태를 배열에 넣으면 유저리스트 완성됨 
  }

  userDepositsToBank(userName, bankName, amount, userPw) {
    this.userName = userName;
    this.bankProperty += amount;
  }
}
module.exports = Bank;
