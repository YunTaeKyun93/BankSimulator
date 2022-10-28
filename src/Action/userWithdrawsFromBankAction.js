const Bank = require("../Store/Bank");
const Action = require("./action");

class UserWithdrawsFromBankAction extends Action{
    constructor({userName,bankName, depositsAmout}){
        super();
        this.userName = userName;
        this.bankName = bankName;
        this.depositsAmount = depositsAmount;
    }
    run(){
        // const user = this.constext.users.find(
        //     (currentUser) => currentUser.userName === userName
        //   );
       const selectUser = this.context.users.findUserByName(this.userName);
       const selectBank = this.context.banks.findBankByName(this.bankName);
        selectBank.userWithdrawsFromBank(selectUser, this.depositsAmount);

    }
}

module.exports = UserWithdrawsFromBankAction;