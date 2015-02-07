/**
 * New node file
 */
var validator = require('validator');

var response;

function MsgServerModeReconnectResponse(){
	response = undefined;
};

MsgServerModeReconnectResponse.prototype.setResponse = function setResponse(value){
//	
//	if(!validator.isInt(value)){
//		throw new Error("Response value not an integer!");
//	}	
//	if(value< 0x00 || value>0x02){
//		throw new Error("Unknown Response value!");
//	}
	
	response = value;
};

MsgServerModeReconnectResponse.prototype.getResponse = function getResponse(){
	return response;
};

MsgServerModeReconnectResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8(response);
};

MsgServerModeReconnectResponse.prototype.getSize = function getSize(){
	var size = 1;
	return size;
};

MsgServerModeReconnectResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+response.toString(16)+"\n";
	return str;
};


MsgServerModeReconnectResponse.parse = function parse(buffer) {
	var message = new MsgServerModeReconnectResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};

module.exports = MsgServerModeReconnectResponse;