/**
 * New node file
 */
var msgUnknownCommandResponse = function(){
	this.unknownRequestCommand = undefined;
	
	this.parse = function(buffer) {			
		this.unknownRequestCommand = buffer.slice(0,4).toString();
		
		console.log("Password [length]: "+this.password+" ["+this.password.length+"]");
	};
	
	this.write = function(buffer) {			
		buffer.writeUInt16LE(this.unknownRequestCommand,9);		
	};
};

module.exports = msgUnknownCommandResponse;
