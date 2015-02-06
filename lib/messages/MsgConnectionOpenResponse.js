/**
 * New node file
 */
var validator = require('validator');

var response;

function MsgConnectionOpenResponse(){
	response = undefined;
};

MsgConnectionOpenResponse.prototype.setResponse = function setResponse(value){	
	if(!validator.isInt(value)){
		throw new Error("Response value not a number!");
	}	
	if(value< 0x00 || value>0x05){
		throw new Error("Unknown Response value!");
	}
	response = value;
};

MsgConnectionOpenResponse.prototype.getResponse = function getResponse(){
	return response;
};

MsgConnectionOpenResponse.prototype.write = function write(buffer) {
	console.log("Response: "+response.toString(16));
	buffer.writeUInt8(response);
};

MsgConnectionOpenResponse.prototype.getSize = function getSize(){
	var size = 1;
	return size;
};


MsgConnectionOpenResponse.parse = function parse(buffer) {
	var message = new MsgConnectionOpenResponse();
	message.setResponse(buffer.readUInt8());
	return message;
};

module.exports = MsgConnectionOpenResponse;