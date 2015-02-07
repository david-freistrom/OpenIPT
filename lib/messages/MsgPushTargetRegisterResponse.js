/**
 * New node file
 */
var validator = require('validator');

var response;
var channelNumber;

function MsgPushTargetRegisterResponse(){
	response = undefined;
	channelNumber = undefined;
};

MsgPushTargetRegisterResponse.prototype.setResponse = function setResponse(value){
//	
//	if(!validator.isInt(value)){
//		throw new Error("Response value not an integer!");
//	}	
//	if(value< 0x00 || value>0x02){
//		throw new Error("Unknown Response value!");
//	}
	
	response = value;
};

MsgPushTargetRegisterResponse.prototype.getResponse = function getResponse(){
	return response;
};

MsgPushTargetRegisterResponse.prototype.setChannelNumber = function setChannelNumber(value){
//	if(!validator.isInt(value)){
//		throw new Error("Channel-Number not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Channel-Number must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 4)){
//		throw new Error("Channel-Number out of range!");
//	}
	channelNumber = value;
};

MsgPushTargetRegisterResponse.prototype.getChannelNumber = function getChannelNumber(){
	return channelNumber;
};

MsgPushTargetRegisterResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8(response);
	buffer.writeUInt32(channelNumber);
};

MsgPushTargetRegisterResponse.prototype.getSize = function getSize(){
	var size = 5;
	return size;
};

MsgPushTargetRegisterResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+response.toString(16)+"\n";
	str+="Channel-Number: "+channelNumber.toString(16)+"\n";
	return str;
};

MsgPushTargetRegisterResponse.parse = function parse(buffer) {
	var message = new MsgPushTargetRegisterResponse();
	message.setResponse(buffer.readUInt8());
	message.setChannelNumber(buffer.readUInt32());
	
	return message;
};

module.exports = MsgPushTargetRegisterResponse;