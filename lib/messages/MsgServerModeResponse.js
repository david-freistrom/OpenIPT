/**
 * New node file
 */
var validator = require('validator');

var response;
var waitTime;

function MsgServerModeResponse(){
	response = undefined;
	waitTime = undefined;
};

MsgServerModeResponse.prototype.setResponse = function setResponse(value){
//	
//	if(!validator.isInt(value)){
//		throw new Error("Response value not an integer!");
//	}	
//	if(value< 0x00 || value>0x03){
//		throw new Error("Unknown Response value!");
//	}
//	
	response = value;
};

MsgServerModeResponse.prototype.getResponse = function getResponse(){
	return response;
};

MsgServerModeResponse.prototype.setWaitTime = function setWaitTime(value){
//	if(!validator.isInt(value)){
//		throw new Error("Wait-Time not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Wait-Time must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 2)){
//		throw new Error("Wait-Time out of range!");
//	}
	waitTime = value;
};

MsgServerModeResponse.prototype.getWaitTime = function getWaitTime(){
	return waitTime;
};

MsgServerModeResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8(response);
	buffer.writeUInt16(waitTime);
};

MsgServerModeResponse.prototype.getSize = function getSize(){
	var size = 3;
	return size;
};

MsgServerModeResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+response.toString(16)+"\n";
	str+="Wait-Time: "+waitTime.toString(16)+"\n";
	return str;
};

MsgServerModeResponse.parse = function parse(buffer) {
	var message = new MsgServerModeResponse();
	message.setResponse(buffer.readUInt8());
	message.setWaitTime(buffer.readUInt16());
	
	return message;
};

module.exports = MsgServerModeResponse;