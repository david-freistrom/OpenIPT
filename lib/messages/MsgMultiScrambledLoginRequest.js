/**
 * New node file
 */
function MsgMultiScrambledLoginRequest(){
	this.account = undefined;
	this.password = undefined;
	this.scrambleKey = undefined;
	this.countRequested = undefined;
	
	this.parse = function parse(buffer) {					
	};
	
	this.write = function write(buffer) {			
	};
};

module.exports = MsgMultiScrambledLoginRequest;