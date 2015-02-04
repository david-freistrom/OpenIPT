/**
 * New node file
 */
var validator = require('validator');

var unknownRequestCommand;

function MsgUnknownCommandResponse(){

	this.setUnknownRequestCommand = function setUnknownRequestCommand(value){
		if(!validator.isInt(value)){
			throw new Error("Unknown Request Command is not an integer!");
		}	
		if(value<0){
			throw new Error("Unknown Request Command must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 2)){
			throw new Error("Unknown Request Command out of range!");
		}
		unknownRequestCommand = value;
	};
	
	this.getUnknownRequestCommand = function getUnknownRequestCommand(){
		return unknownRequestCommand;
	};
	
	this.write = function write(buffer) {	
		console.log("Unknown Request Command: "+unknownRequestCommand.toString(16));
		buffer.writeUInt16(unknownRequestCommand);
	};
	
	this.getSize = function getSize(){
		var size = 2;
		return size;
	};
};

MsgUnknownCommandResponse.parse = function parse(buffer) {
	var message = new MsgUnknownCommandResponse();
	message.setUnknownRequestCommand(buffer.readUInt16());
	
	return message;
};

module.exports = MsgUnknownCommandResponse;
