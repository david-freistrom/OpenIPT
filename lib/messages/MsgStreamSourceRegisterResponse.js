/**
 * New node file
 */
var validator = require('validator');

var response;

function MsgStreamSourceRegisterResponse(){
	response = undefined;
};


MsgStreamSourceRegisterResponse.prototype.setResponse = function setResponse(value){
//	
//	if(!validator.isInt(value)){
//		throw new Error("Response value not an integer!");
//	}	
//	if(value< 0x00 || value>0x02){
//		throw new Error("Unknown Response value!");
//	}
	
	response = value;
};

MsgStreamSourceRegisterResponse.prototype.getResponse = function getResponse(){
	return response;
};

MsgStreamSourceRegisterResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8(response);
};

MsgStreamSourceRegisterResponse.prototype.getSize = function getSize(){
	var size = 1;
	return size;
};

MsgStreamSourceRegisterResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+response.toString(16)+"\n";
	return str;
};

MsgStreamSourceRegisterResponse.parse = function parse(buffer) {
	var message = new MsgStreamSourceRegisterResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};

module.exports = MsgStreamSourceRegisterResponse;