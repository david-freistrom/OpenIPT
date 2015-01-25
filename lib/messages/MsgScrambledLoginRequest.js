/**
 * New node file
 */
var Utils = require('../Utils');

function MsgScrambledLoginRequest(){
	this.account = undefined;
	this.password = undefined;
	this.scrambleKey = undefined;
	
	this.parse = function parse(buffer) {
		var scrambledContent = Utils.scrambleContentWithDefaultKey(buffer);
		
		console.log("Scrambled Content: 0x"+scrambledContent.toString('hex'));
			
		this.account = scrambledContent.slice(0,4).toString();
		this.password = scrambledContent.slice(5,9).toString();
		this.scrambleKey = scrambledContent.slice(scrambledContent.length-32,scrambledContent.length);
		
		console.log("Password [length]: "+this.password+" ["+this.password.length+"]");
		console.log("Username [length]: "+this.account+" ["+this.account.length+"]");
		console.log("Scramble Key [length]: 0x"+this.scrambleKey.toString('hex')+" ["+this.scrambleKey.length+"]");
	};
	
	this.write = function write(buffer) {			
	};
};

module.exports = MsgScrambledLoginRequest;
