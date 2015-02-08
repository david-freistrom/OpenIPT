/**
 * New node file
 */
var validator = require('validator');

function MsgPublicLoginResponse(){
	this.response = undefined;
	this.reactionTime = undefined;
	this.newAddress = undefined;
};

MsgPublicLoginResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
}; 

MsgPublicLoginResponse.prototype.getResponse = function getResponse(){
	return this.response;
}; 

MsgPublicLoginResponse.prototype.setReactionTime = function setReactionTime(value){
	this.reactionTime = value;
}; 

MsgPublicLoginResponse.prototype.getReactionTime = function getPassword(){
	return this.reactionTime;
}; 

MsgPublicLoginResponse.prototype.setNewAddress = function setNewAddress(value){	
	this.newAddress = value;
}; 

MsgPublicLoginResponse.prototype.getNewAddress = function getNewAddress(){
	this.newAddress;
}; 

MsgPublicLoginResponse.prototype.write = function write(buffer) {
	buffer.writeUInt8(this.response);
	buffer.writeUInt16(this.reactionTime);
	buffer.writeUInt8String(this.newAddress);	
}; 

MsgPublicLoginResponse.prototype.getSize = function getSize(){
	return 3+this.newAddress.length+1;
}; 

MsgPublicLoginResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	str+="Reaction-Time: "+this.reactionTime.toString(16)+"\n";
	str+="New Address: "+this.newAddress+"\n";
	return str;
};

MsgPublicLoginResponse.parse = function parse(buffer) {
	var message = new MsgPublicLoginResponse();
	message.setResponse(buffer.readUInt8());
	message.setReactionTime(buffer.readUInt16());
	message.setNewAddress(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgPublicLoginResponse;