/**
 * New node file
 */
var validator = require('validator');

function MsgPushTargetDeregisterResponse(){
	this.response = undefined;
	this.targetName = undefined;
};

MsgPushTargetDeregisterResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgPushTargetDeregisterResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgPushTargetDeregisterResponse.prototype.setTargetName = function setTargetName(value){
	this.targetName = value;
};

MsgPushTargetDeregisterResponse.prototype.getTargetName = function getTargetName(){
	return this.targetName;
};

MsgPushTargetDeregisterResponse.prototype.write = function write(buffer) {
	buffer.writeUInt8(this.response);
	buffer.writeUInt8String(this.targetName);
};

MsgPushTargetDeregisterResponse.prototype.getSize = function getSize(){
	return 1+this.targetName.length+1;
};

MsgPushTargetDeregisterResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	str+="Target-Name: "+this.targetName+"\n";
	return str;
};

MsgPushTargetDeregisterResponse.parse = function parse(buffer) {
	var message = new MsgPushTargetDeregisterResponse();
	message.setResponse(buffer.readUInt8());
	message.setTargetName(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgPushTargetDeregisterResponse;