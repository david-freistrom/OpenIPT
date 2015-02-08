/**
 * New node file
 */
var validator = require('validator');

function MsgMultiPublicLoginResponse(){
	this.response = undefined;
	this.reactionTime = undefined;
	this.newAddress = undefined;
	this.countConfirmed = undefined;
};

MsgMultiPublicLoginResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgMultiPublicLoginResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgMultiPublicLoginResponse.prototype.setReactionTime = function setReactionTime(value){
	this.reactionTime = value;
};

MsgMultiPublicLoginResponse.prototype.getReactionTime = function getReactionTime(){
	return this.reactionTime;
};

MsgMultiPublicLoginResponse.prototype.setNewAddress = function setNewAddress(value){
	this.newAddress = value;
};

MsgMultiPublicLoginResponse.prototype.getNewAddress = function getNewAddress(){
	return this.newAddress;
};

MsgMultiPublicLoginResponse.prototype.setCountConfirmed = function setCountConfirmed(value){
	this.countConfirmed = value;
};

MsgMultiPublicLoginResponse.prototype.getCountConfirmed = function getCountConfirmed(){
	return this.countConfirmed;
};

MsgMultiPublicLoginResponse.prototype.write = function write(buffer) {		
	buffer.writeUInt8(this.response);
	buffer.writeUInt16(this.reactionTime);
	buffer.writeUInt8String(this.newAddress);
	buffer.writeUInt16(this.countConfirmed);
};

MsgMultiPublicLoginResponse.prototype.getSize = function getSize(){
	return 5+this.newAddress.length+1;
};

MsgMultiPublicLoginResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	str+="Reaction-Time: "+this.reactionTime.toString(16)+"\n";
	str+="New Address: "+this.newAddress+"\n";
	str+="Count Confirmed: "+this.countConfirmed.toString(16)+"\n";
	
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