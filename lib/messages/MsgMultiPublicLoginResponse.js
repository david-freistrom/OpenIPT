/**
 * New node file
 */
var validator = require('validator');

var response;
var reactionTime;
var newAddress;
var countConfirmed;

function MsgMultiPublicLoginResponse(){
	response = undefined;
	reactionTime = undefined;
	newAddress = undefined;
	countConfirmed = undefined;
};

MsgMultiPublicLoginResponse.prototype.setResponse = function setResponse(value){
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

MsgMultiPublicLoginResponse.prototype.getResponse = function getResponse(){
	return response;
};

MsgMultiPublicLoginResponse.prototype.setReactionTime = function setReactionTime(value){
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

MsgMultiPublicLoginResponse.prototype.getReactionTime = function getReactionTime(){
	return reactionTime;
};

MsgMultiPublicLoginResponse.prototype.setNewAddress = function setNewAddress(value){
//	if(!validator.isIP(value)){
//		throw new Error("Invalid Address format!");
//	}	
//	if(!validator.isByteLength(value, 0, 255)){
//		throw new Error("Address too long!");
//	}
	
	newAddress = value;
};

MsgMultiPublicLoginResponse.prototype.getNewAddress = function getNewAddress(){
	return newAddress;
};

MsgMultiPublicLoginResponse.prototype.setCountConfirmed = function setCountConfirmed(value){
//	if(!validator.isInt(value)){
//		throw new Error("Count-Confirmed not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Count-Confirmed must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 2)){
//		throw new Error("Count-Confirmed out of range!");
//	}
	countConfirmed = value;
};

MsgMultiPublicLoginResponse.prototype.getCountConfirmed = function getCountConfirmed(){
	return countConfirmed;
};

MsgMultiPublicLoginResponse.prototype.write = function write(buffer) {		
	buffer.writeUInt8(response);
	buffer.writeUInt16(reactionTime);
	buffer.writeUInt8String(newAddress);
	buffer.writeUInt16(countConfirmed);
};

MsgMultiPublicLoginResponse.prototype.getSize = function getSize(){
	var size = 5;
	size += newAddress.length+1;
	return size;
};

MsgMultiPublicLoginResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+response.toString(16)+"\n";
	str+="Reaction-Time: "+reactionTime.toString(16)+"\n";
	str+="New Address: "+newAddress+"\n";
	str+="Count Confirmed: "+countConfirmed.toString(16)+"\n";
	return str;
};


MsgMultiPublicLoginResponse.parse = function parse(buffer) {
	var message = new MsgMultiPublicLoginResponse();
	message.setResponse(buffer.readUInt8());
	message.setReactionTime(buffer.readUInt16());
	message.setNewAddress(buffer.readUInt8String());
	message.setCountConfirmed(buffer.readUInt16());
	
	return message;
};

module.exports = MsgMultiPublicLoginResponse;