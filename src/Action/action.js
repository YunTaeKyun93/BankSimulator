class Action {
  run() {}
  findUserByName(userName) {
    // try 문으로??? 
    const user = this.constext.users.find(
      (currentUser) => currentUser.userName === userName
    );
    if (user == null) {
      throw new Error(`${userName}을 이름으로 가진 유저를 찾을 수 없습니다.`);
    }

    return user;
  }

  findBankByName(bankName) {
    const bank = this.constext.banks.find(
      (currentBank) => currentBank.bankName === bankName
    );
    if (bank == null) {
      throw new Error(`${bankName}을 이름으로 가진 은행을 찾을 수 없습니다.`);
    }
    return bank;
  }
}
module.exports = Action;
