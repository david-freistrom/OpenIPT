/**
 * New node file
 */
var validator = require('validator');

var response;
var reactionTime;
var newAddress;

function MsgScrambledLoginResponse(){
	response = 0x00;
	reactionTime = 0x0000;
	newAddress = "0.0.0.0";
};

MsgScrambledLoginResponse.prototype.setResponse = function setResponse(value){
//	
//	if(!validator.isInt(value)){
//		throw new Error("Response value not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Response value must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 1)){
//		throw new Error("Response value out of range!");
//	}
	
	response = value;
};

MsgScrambledLoginResponse.prototype.getResponse = function getResponse(){
	return response;
};

MsgScrambledLoginResponse.prototype.setReactionTime = function setReactionTime(value){
//	if(!validator.isInt(value)){
//		throw new Error("Reaction-Time not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Reaction-Time must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 2)){
//		throw new Error("Reaction-Time out of range!");
//	}
	reactionTime = value;
};

MsgScrambledLoginResponse.prototype.getReactionTime = function getReactionTime(){
	return reactionTime;
};

MsgScrambledLoginResponse.prototype.setNewAddress = function setNewAddress(value){
//	if(!validator.isByteLength(value, 0, 255)){
//		throw new Error("Address too long!");
//	}
//	if(!validator.isIP(value)){
//		throw new Error("Invalid Address format!");
//	}
	newAddress = value;
};

MsgScrambledLoginResponse.prototype.getNewAddress = function getNewAddress(){
	return newAddress;
};

MsgScrambledLoginResponse.prototype.write = function write(buffer) {
	buffer.writeUInt8(response);
	buffer.writeUInt16(reactionTime);
	buffer.writeUInt8String(newAddress);
};

MsgScrambledLoginResponse.prototype.getSize = function getSize(){
	var size = 3;
	size += newAddress.length+1;
	return size;
};

MsgScrambledLoginResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+response.toString(16)+"\n";
	str+="Reaction-Time: "+reactionTime.toString(16)+"\n";
	str+="New Address: "+newAddress+"\n";
	return str;
};


MsgScrambledLoginResponse.parse = function parse(buffer) {
	var message = new MsgScrambledLoginResponse();
	message.setResponse(buffer.readUInt8());
	message.setReactionTime(buffer.readUInt16());
	message.setNewAddress(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgScrambledLoginResponse;