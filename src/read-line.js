const readline = require('readline');

class ReadLine {
	constructor() {
		this.nodeReadLine = readline.createInterface({
			input: process.stdin,
            output: process.stdout,
		});
	}
	
	registerCallback(cb) {
		this.nodeReadLine.on('line', cb);
	}
}

module.exports = ReadLine;
