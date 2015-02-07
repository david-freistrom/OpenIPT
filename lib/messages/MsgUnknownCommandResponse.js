/**
 * New node file
 */
var validator = require('validator');

var unknownRequestCommand;

function MsgUnknownCommandResponse(){
	unknownRequestCommand = undefined;
};

MsgUnknownCommandResponse.prototype.setUnknownRequestCommand = function setUnknownRequestCommand(value){
//	if(!validator.isInt(value)){
//		throw new Error("Unknown-Request-Command not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Unknown-Request-Command must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 2)){
//		throw new Error("Unknown-Request-Command out of range!");
//	}
	unknownRequestCommand = value;
};

MsgUnknownCommandResponse.prototype.getUnknownRequestCommand = function getUnknownRequestCommand(){
	return unknownRequestCommand;
};

MsgUnknownCommandResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt16(unknownRequestCommand);
};

MsgUnknownCommandResponse.prototype.getSize = function getSize(){
	var size = 2;
	return size;
};

MsgUnknownCommandResponse.prototype.toString = function toString(){
	var str = "";
	str+="Unknown-Request-Command: "+unknownRequestCommand.toString(16)+"\n";
	return str;
};

MsgUnknownCommandResponse.parse = function parse(buffer) {
	var message = new MsgUnknownCommandResponse();
	message.setUnknownRequestCommand(buffer.readUInt16());
	
	return message;
};

module.exports = MsgUnknownCommandResponse;
