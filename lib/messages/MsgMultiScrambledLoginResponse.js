/**
 * New node file
 */

function MsgMultiScrambledLoginResponse(){
	this.response = undefined;
	this.reactionTime = undefined;
	this.newAddress = undefined;
	this.countConfirmed = undefined;
};

MsgMultiScrambledLoginResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgMultiScrambledLoginResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgMultiScrambledLoginResponse.prototype.setReactionTime = function setReactionTime(value){
	this.reactionTime = value;
};

MsgMultiScrambledLoginResponse.prototype.getReactionTime = function getReactionTime(){
	return this.reactionTime;
};

MsgMultiScrambledLoginResponse.prototype.setNewAddress = function setNewAddress(value){
	this.newAddress = value;
};

MsgMultiScrambledLoginResponse.prototype.getNewAddress = function getNewAddress(){
	return this.newAddress;
};

MsgMultiScrambledLoginResponse.prototype.setCountConfirmed = function setCountConfirmed(value){
	this.countConfirmed = value;
};

MsgMultiScrambledLoginResponse.prototype.getCountConfirmed = function getCountConfirmed(){
	return this.countConfirmed;
};

MsgMultiScrambledLoginResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8(this.response);
	buffer.writeUInt16(this.reactionTime);
	buffer.writeUInt8String(this.newAddress);
	buffer.writeUInt16(this.countConfirmed);
};

MsgMultiScrambledLoginResponse.prototype.getSize = function getSize(){
	return 5+this.newAddress.length+1;
};

MsgMultiScrambledLoginResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	str+="Reaction-Time: "+this.reactionTime.toString(16)+"\n";
	str+="New Address: "+this.newAddress+"\n";
	str+="Count Confirmed: "+this.countConfirmed.toString(16)+"\n";
	
	return str;
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