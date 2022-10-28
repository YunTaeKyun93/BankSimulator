const CreateUserAction = require('./Action/createUserAction');

class Test {
    constructor(app) {
        this.app = app;
    }

    run() {
        const insertContextToAction = (action) => action.context = this.app.context;

        const actions = [
            new CreateUserAction({
                name: 'Jack',
                age: 24,
                country: 'Korea',
                initialBudget: 1000,
            }),
            new CreateUserAction({
                name: 'Sam',
                age: 30,
                country: 'Japan',
                initialBudget: 2000,
            }),
            new CreateUserAction({
                name: 'Oliver',
                age: 30,
                country: 'England',
                initialBudget: 20,
            }),
        ];

        actions.forEach(action => {
            insertContextToAction(action);
            action.run();
        });

        // 별도 명령어 실행 테스트
        this.app.parseAndRun('create-asdf');
    }
}

module.exports = Test;