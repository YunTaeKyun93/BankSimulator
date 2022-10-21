//create-bank (이름) (이자율(백분율)) (초기자산)
class Bank {
  constructor(
    bankName,
    interest,
    bankProperty,
    userList,
    userName,
    userInitialBudget,
    userUniqueNum,
  ) {
    this.bankName = bankName;
    this.interest = interest;
    this.bankProperty = bankProperty;
    userName = this.userName
    this.userList = [{
      userUniqueNum: 0,
      userName: '',
      userInitialBudget: 0,
    }];
    // 하고자 하는 거 최초로 유저가 은행에 돈을 예치할 때 userName과 userInitialBudget이라는 
    // 키를 가진 객체 형태를 배열에 넣으면 유저리스트 완성됨 
    // 은행에 계좌 신설을 하면 배열의 순서를 가지기 위해 계좌와 아이디 값생성 이후 
    // 입금 출금 할 시 이름과 아이디 값으로 해당 계좌 입장 가능 
  }

  userDepositsToBank(userName, bankName, amount, userPw) {
    this.userName = userName;
    this.bankProperty += amount;
    this.userInitialBudget += amount;
  }
}
module.exports = Bank;
