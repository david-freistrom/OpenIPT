/**
 * New node file
 */
var validator = require('validator');

var response;
var reactionTime;
var newAddress;
var countConfirmed;

function MsgMultiScrambledLoginResponse(){
	response = undefined;
	reactionTime = undefined;
	newAddress = undefined;
	countConfirmed = undefined;
};

MsgMultiScrambledLoginResponse.prototype.setResponse = function setResponse(value){
	
	if(!validator.isInt(value)){
		throw new Error("Response value not an integer!");
	}	
	if(value<0){
		throw new Error("Response value must be >= 0 !");
	}
	if(!validator.isByteLength(value, 1, 1)){
		throw new Error("Response value out of range!");
	}
	
	response = value;
};

MsgMultiScrambledLoginResponse.prototype.getResponse = function getResponse(){
	return response;
};

MsgMultiScrambledLoginResponse.prototype.setReactionTime = function setReactionTime(value){
	if(!validator.isInt(value)){
		throw new Error("Reaction-Time not an integer!");
	}	
	if(value<0){
		throw new Error("Reaction-Time must be >= 0 !");
	}
	if(!validator.isByteLength(value, 1, 2)){
		throw new Error("Reaction-Time out of range!");
	}
	reactionTime = value;
};

MsgMultiScrambledLoginResponse.prototype.getReactionTime = function getReactionTime(){
	return reactionTime;
};

MsgMultiScrambledLoginResponse.prototype.setNewAddress = function setNewAddress(value){
	if(!validator.isIP(value)){
		throw new Error("Invalid Address format!");
	}	
	if(!validator.isByteLength(value, 0, 255)){
		throw new Error("Address too long!");
	}
	newAddress = value;
};

MsgMultiScrambledLoginResponse.prototype.getNewAddress = function getNewAddress(){
	return newAddress;
};

MsgMultiScrambledLoginResponse.prototype.setCountConfirmed = function setCountConfirmed(value){
	if(!validator.isInt(value)){
		throw new Error("Count-Confirmed is not an integer!");
	}	
	if(value<0){
		throw new Error("Count-Confirmed must be >= 0 !");
	}
	if(!validator.isByteLength(value, 1, 2)){
		throw new Error("Count-Confirmed out of range!");
	}
	countConfirmed = value;
};

MsgMultiScrambledLoginResponse.prototype.getCountConfirmed = function getCountConfirmed(){
	return countConfirmed;
};


MsgMultiScrambledLoginResponse.prototype.write = function write(buffer) {	
	console.log("Response: "+response.toString(16));
	console.log("Reaction Time: "+reactionTime.toString(16));
	console.log("New Address: "+newAddress);
	console.log("Count Confirmed: "+countConfirmed.toString(16));
	
	buffer.writeUInt8(response);
	buffer.writeUInt16(reactionTime);
	buffer.writeUInt8String(newAddress);
	buffer.writeUInt16(countConfirmed);
};

MsgMultiScrambledLoginResponse.prototype.getSize = function getSize(){
	var size = 5;
	size += newAddress.length+1;
	return size;
};


MsgMultiScrambledLoginResponse.parse = function parse(buffer) {
	var message = new MsgMultiScrambledLoginResponse();
	message.setResponse(buffer.readUInt8());
	message.setReactionTime(buffer.readUInt16());
	message.setNewAddress(buffer.readUInt8String());
	message.setCountConfirmed(buffer.readUInt16());
	
	return message;
};

module.exports = MsgMultiScrambledLoginResponse;