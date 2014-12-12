/**
 * New node file
 */

var Constants = require('./Constants');
var Utils = require('./Utils');

var IptHeader = require('./IptHeader');
var MsgScrambleLoginRequest = require('./MsgScrambleLoginRequest');



var iptCommand = function(){
	this.header = undefined;
	this.message = undefined;
	
	this.parse = function(buffer) {
	
		this.header = new IptHeader();
		this.header.parse(buffer);
		
		var content = buffer.slice(this.header.size,buffer.length);
		
		if(this.header.commandTag===Constants.SCRAMBLED_LOGIN_REQUEST){
			console.log("SCRAMBLED_LOGIN_REQUEST received: "+this.header.commandTag.toString(16));			
			this.message = new MsgScrambleLoginRequest();
			this.message.parse(content);
			
		} else if(this.header.commandTag===Constants.UNKNOWN_COMMAND_RESPONSE){
			console.log("UNKNOWN_COMMAND_RESPONSE received: "+this.header.commandTag.toString(16));
		} else{
			console.log("Unknown Command received!: "+this.header.commandTag.toString(16));
		}
	    
	};
	
	this.write = function(){
		var buffer = new Buffer(this.header.len);
		this.header.write(buffer);
		this.message.write(buffer);
		return buffer;
	};
};


module.exports = iptCommand;



