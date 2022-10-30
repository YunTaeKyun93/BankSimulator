class UserNotFoundByNameError extends Error {
    constructor(userName) {
        super(`유저를 찾을 수 없음(이름: ${userName})`);
        this.userName = userName;
    }
}

module.exports = UserNotFoundByNameError;
