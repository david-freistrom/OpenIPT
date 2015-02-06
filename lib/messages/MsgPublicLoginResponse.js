/**
 * New node file
 */
var validator = require('validator');

var response;
var reactionTime;
var newAddress;

function MsgPublicLoginResponse(){
	response = undefined;
	reactionTime = undefined;
	newAddress = undefined;
};

MsgPublicLoginResponse.prototype.setResponse = function setResponse(value){
	
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

MsgPublicLoginResponse.prototype.getResponse = function getResponse(){
	return response;
}; 

MsgPublicLoginResponse.prototype.setReactionTime = function setReactionTime(value){
	if(!validator.isInt(value)){
		throw new Error("Reaction-Time not an integer!");
	}	
	if(value<0){
		throw new Error("Reaction Time must be >= 0 !");
	}
	if(!validator.isByteLength(value, 1, 2)){
		throw new Error("Reaction-Time out of range!");
	}
	reactionTime = value;
}; 

MsgPublicLoginResponse.prototype.getReactionTime = function getPassword(){
	return reactionTime;
}; 

MsgPublicLoginResponse.prototype.setNewAddress = function setNewAddress(value){
	if(!validator.isByteLength(value, 0, 255)){
		throw new Error("Password too long!");
	}	
	if(!validator.isIP(value)){
		throw new Error("Unknown Address format!");
	}	
	newAddress = value;
}; 

MsgPublicLoginResponse.prototype.getNewAddress = function getNewAddress(){
	newAddress;
}; 

MsgPublicLoginResponse.prototype.write = function write(buffer) {
	console.log("Response: "+response.toString(16));
	console.log("ReactionTime: "+reactionTime);
	console.log("New Address: "+newAddress);
	
	buffer.writeUInt8(response);
	buffer.writeUInt16(reactionTime);
	buffer.writeUInt8String(newAddress);	
}; 

MsgPublicLoginResponse.prototype.getSize = function getSize(){
	var size = 3;
	size += newAddress.length+1;
	return size;
}; 


MsgPublicLoginResponse.parse = function parse(buffer) {
	var message = new MsgPublicLoginResponse();
	message.setResponse(buffer.readUInt8());
	message.setReactionTime(buffer.readUInt16());
	message.setNewAddress(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgPublicLoginResponse;
