const ReadLine = require('./read-line');
const Parser = require('./parser');

class App {
    run() {
        const readLine = new ReadLine();
        const parser = new Parser();
        
        readLine.registerCallback((text) => parser.interpret(text));
    }
}

module.exports = App;
