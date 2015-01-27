/**
 * New node file
 */

var unknownRequestCommand;

function MsgUnknownCommandResponse(){

	this.setUnknownRequestCommand = function setUnknownRequestCommand(value){
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
