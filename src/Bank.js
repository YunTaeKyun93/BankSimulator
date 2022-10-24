const BankAccount = require("./bank-account");

//create-bank (이름) (이자율(백분율)) (초기자산)
class Bank {
  constructor(bankName, interest, bankInitialProperty) {
    this.bankName = bankName;
    this.interest = interest;
    this.bankInitialProperty = bankInitialProperty;
    this.bankProperty = bankInitialProperty;
    this.userAccounts = [];
    // userName = this.userName
    // this.userList = [{
    //   userUniqueNum: 0,
    //   userName: '',
    //   userInitialBudget: 0,
    // }];

    // 하고자 하는 거 최초로 유저가 은행에 돈을 예치할 때 userName과 userInitialBudget이라는
    // 키를 가진 객체 형태를 배열에 넣으면 유저리스트 완성됨
    // 은행에 계좌 신설을 하면 배열의 순서를 가지기 위해 계좌와 아이디 값생성 이후
    // 입금 출금 할 시 이름과 아이디 값으로 해당 계좌 입장 가능
  }

  // createBankAccountIfDoesNotExist(user) {
  //   let bankAccount = this.userAccounts.find(
  //     (userAccount) => userAccount.user.name === user
  //   );

  //   if (bankAccount == null) {
  //     const newBankAccount = new BankAccount(user, 0);
  //     this.userAccounts.push(newBankAccount);
  //     bankAccount = newBankAccount;
  //     console.log(`${user}님의 계좌가 신설 되었습니다.`);
  //   } else {
  //     console.log(`${user}님의 계좌가 확인 되었습니다.`);
  //   }
  //   return bankAccount;
  // }
  createBankAccountIfDoesNotExist(user, bankName) {
    let bankAccount = this.userAccounts.find(
      (userAccount) => userAccount.user === user
    );
    console.log('bankAccount',bankAccount)

    if (bankAccount == undefined) {
      const newBankAccount = new BankAccount(user, bankName, 0);
      this.userAccounts.push(newBankAccount);
      bankAccount = newBankAccount;
      console.log(`${user}님의 계좌가 신설 되었습니다.`);
    } else {
      console.log(`${user}님의 계좌가 확인 되었습니다.`);
    }
    return bankAccount;
  }

  userDepositsToBank(user, bankName, amount) {
    // console.log("bankName", this.bankName);
    // console.log("user", user);

    const bankAccount = this.createBankAccountIfDoesNotExist(user, bankName);

    // user.userInitialBudget -= amount; //
    this.bankProperty += amount; // 은행 잔고
    bankAccount.balance += amount; // 유저의 은행 계좌잔고
    bankAccount.bankName = bankName;
  }
  // userDepositsToBank(user, amount/*userName, bankName, amount, userPw*/) {
  //   // 은행정보: this.
  //   // 유저 정보: 따로 받아야 함.
  //   // 얼마를 받아야 할지: 따로 받아야 함.

  //   // 1. 유저가 계좌가 없다면, 생성하라.
  //   // 이 시점: bankAccount가 null일 수 있을까?(또는 undefined)
  //   const bankAccount = this.createBankAccountIfDoesNotExist(user);

  //   // 2. 계좌에 amount만큼 돈을 넣어라.
  //   // 2-1. 유저의 호주머니에서 돈을 빼라.
  //   // 2-2. 은행의 예산에 돈을 넣어라.
  //   // 2-3. 유저의 은행 계좌에 돈을 넣어라.
  //   user.userInitialBudget -= amount;
  //   this.bankProperty += amount;
  //   bankAccount.balance += amount;

  //   // 코드을 실행하면 userName bankName에 조건문으로 해서 있으면
  //   // userName이 중복된다면 신설 할 필요없이 돈만 입금되고 해당유저의 자산에 추가
  //   // userName이 중복이 아니라면 실설 계좌 생성

  //   // this.userName = userName;
  //   // this.bankProperty += amount;
  //   // this.userInitialBudget += amount;
  // }
  userWithdrawsFromBank(user, bankName, amount) {
    const bankAccount = this.createBankAccountIfDoesNotExist(user, bankName);
    this.bankProperty -= amount;
    bankAccount.balance -= amount;
    bankAccount.bankName = bankName;
  }
}
module.exports = Bank;
