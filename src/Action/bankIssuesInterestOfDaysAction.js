const Bank = require("../Store/Bank");
const Action = require("./action");

class BankIssuesInterestOfDaysAction extends Action{
    constructor({bankName, interestPeriod}){
        super();
        this.bankName = bankName;
        this.interestPeriod = interestPeriod;
    }
 
    run(){
        const selectBank = this.findBankByName(this.bankName);
        selectBank.bankIssuesInterestOfDays(this.interestPeriod);
    }
}

module.exports = BankIssuesInterestOfDaysAction;