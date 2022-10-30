class BankNotFoundByNameError extends Error {
    constructor(bankName) {
        super(`은행을 찾을 수 없음(이름: ${bankName})`);
        this.bankName = bankName;
    }
}

module.exports = BankNotFoundByNameError;
