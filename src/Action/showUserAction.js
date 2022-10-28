const Action = require("./action");

class ShowUserAction extends Action{
    constructor(){
        super();
    }
    run(){
        const showUser =(user)=>{
            console.log(user);
        }
        this.context.users.forEach(showUser);
        
    }
}

module.exports = ShowUserAction;