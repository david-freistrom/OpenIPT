/**
 * New node file
 */
var validator = require('validator');

function MsgUnknownCommandResponse(){
	this.unknownRequestCommand = undefined;
};

MsgUnknownCommandResponse.prototype.setUnknownRequestCommand = function setUnknownRequestCommand(value){
	this.unknownRequestCommand = value;
};

MsgUnknownCommandResponse.prototype.getUnknownRequestCommand = function getUnknownRequestCommand(){
	return this.unknownRequestCommand;
};

MsgUnknownCommandResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt16(this.unknownRequestCommand);
};

MsgUnknownCommandResponse.prototype.getSize = function getSize(){
	return 2;
};

MsgUnknownCommandResponse.prototype.toString = function toString(){
	var str = "";
	str+="Unknown-Request-Command: "+this.unknownRequestCommand.toString(16)+"\n";
	return str;
};

MsgUnknownCommandResponse.parse = function parse(buffer) {
	var message = new MsgUnknownCommandResponse();
	message.setUnknownRequestCommand(buffer.readUInt16());
	
	return message;
};

module.exports = MsgUnknownCommandResponse;