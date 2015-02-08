/**
 * New node file
 */
var validator = require('validator');

function MsgScrambledLoginResponse(){
	this.response = 0x00;
	this.reactionTime = 0x0000;
	this.newAddress = "0.0.0.0";
};

MsgScrambledLoginResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgScrambledLoginResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgScrambledLoginResponse.prototype.setReactionTime = function setReactionTime(value){
	this.reactionTime = value;
};

MsgScrambledLoginResponse.prototype.getReactionTime = function getReactionTime(){
	return this.reactionTime;
};

MsgScrambledLoginResponse.prototype.setNewAddress = function setNewAddress(value){
	this.newAddress = value;
};

MsgScrambledLoginResponse.prototype.getNewAddress = function getNewAddress(){
	return this.newAddress;
};

MsgScrambledLoginResponse.prototype.write = function write(buffer) {
	buffer.writeUInt8(this.response);
	buffer.writeUInt16(this.reactionTime);
	buffer.writeUInt8String(this.newAddress);
};

MsgScrambledLoginResponse.prototype.getSize = function getSize(){
	return 3+this.newAddress.length+1;
};

MsgScrambledLoginResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	str+="Reaction-Time: "+this.reactionTime.toString(16)+"\n";
	str+="New Address: "+this.newAddress+"\n";
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