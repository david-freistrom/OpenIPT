/**
 * New node file
 */
var validator = require('validator');

var response;

function MsgDataTransferResponse(){
	response = undefined;
};

MsgDataTransferResponse.prototype.setResponse = function setResponse(value){
	if(!validator.isInt(value)){
		throw new Error("Response value not a number!");
	}	
	if(value< 0x00 || value>0x03){
		throw new Error("Unknown Response value!");
	}
	
	response = value;
};

MsgDataTransferResponse.prototype.getResponse = function getResponse(){
	return response;
};

MsgDataTransferResponse.prototype.write = function write(buffer) {		
	console.log("Response: "+response.toString(16));
	buffer.writeUInt8(response);
};

MsgDataTransferResponse.prototype.getSize = function getSize(){
	var size = 1;
	return size;
};


MsgDataTransferResponse.parse = function parse(buffer) {
	var message = new MsgDataTransferResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};



module.exports = MsgDataTransferResponse;