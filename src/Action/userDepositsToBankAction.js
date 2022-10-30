const Bank = require("../Store/Bank");
const Action = require("./action");

class UserDepositsToBankAction extends Action{
    constructor({userName,bankName, depositsAmout}){
        super();
        this.userName = userName;
        this.bankName = bankName;
        this.depositsAmout = depositsAmout;
    }
    run(){
        // const user = this.constext.users.find(
        //     (currentUser) => currentUser.userName === userName
        //   );
       const selectUser = this.findUserByName(this.userName);
       const selectBank = this.findBankByName(this.bankName);
        selectBank.userDepositsToBank(selectUser, this.depositsAmout);

    }
}

module.exports = UserDepositsToBankAction;
