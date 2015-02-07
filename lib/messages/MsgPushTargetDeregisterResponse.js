/**
 * New node file
 */
var validator = require('validator');

var response;
var targetName;

function MsgPushTargetDeregisterResponse(){
	response = undefined;
	targetName = undefined;
};

MsgPushTargetDeregisterResponse.prototype.setResponse = function setResponse(value){
//	if(!validator.isInt(value)){
//		throw new Error("Response value not an Integer!");
//	}	
//	if(value<0x00 || value>0x01){
//		throw new Error("Unknown Response value!");
//	}
	response = value;
};

MsgPushTargetDeregisterResponse.prototype.getResponse = function getResponse(){
	return response;
};

MsgPushTargetDeregisterResponse.prototype.setTargetName = function setTargetName(value){
//	if(!validator.isIAlphanumeric(value)){
//		throw new Error("Target-Name not a String!");
//	}	
//	if(!validator.isByteLength(value, 0, 255)){
//		throw new Error("Target-Name too long!");
//	}
	targetName = value;
};

MsgPushTargetDeregisterResponse.prototype.getTargetName = function getTargetName(){
	return targetName;
};

MsgPushTargetDeregisterResponse.prototype.write = function write(buffer) {
	buffer.writeUInt8(response);
	buffer.writeUInt8String(targetName);
};

MsgPushTargetDeregisterResponse.prototype.getSize = function getSize(){
	var size = 1;
	size += targetName.length+1;
	return size;
};

MsgPushTargetDeregisterResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+response.toString(16)+"\n";
	str+="Target-Name: "+targetName+"\n";
	return str;
};


MsgPushTargetDeregisterResponse.parse = function parse(buffer) {
	var message = new MsgPushTargetDeregisterResponse();
	message.setResponse(buffer.readUInt8());
	message.setTargetName(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgPushTargetDeregisterResponse;