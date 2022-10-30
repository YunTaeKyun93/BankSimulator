const util = require('util');
const Action = require("./action");

class OverallInfoAction extends Action{
    constructor(){
        super();
    }
    run(){
        console.log(
            util.inspect(
                this.context, 
                {showHidden: false, depth: null, colors: true}));
        // console.log(this.context);
        // 질문...
    }
}

module.exports = OverallInfoAction;
