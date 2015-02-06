/**
 * New node file
 */
var validator = require('validator');

var response;

function MsgLogoutResponse(){
	response = undefined;
};

MsgLogoutResponse.prototype.setResponse = function setResponse(value){
	
	if(!validator.isInt(value)){
		throw new Error("Response value not an integer!");
	}	
	if(value!=0x01){
		throw new Error("Unknown Response value!");
	}
	
	response = value;
};

MsgLogoutResponse.prototype.getResponse = function getResponse(){
	return response;
};

MsgLogoutResponse.prototype.write = function write(buffer) {	
	console.log("Response: "+response.toString(16));
	buffer.writeUInt8(response);
};

MsgLogoutResponse.prototype.getSize = function getSize(){
	var size = 1;
	return size;
};


MsgLogoutResponse.parse = function parse(buffer) {
	var message = new MsgLogoutResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};

module.exports = MsgLogoutResponse;