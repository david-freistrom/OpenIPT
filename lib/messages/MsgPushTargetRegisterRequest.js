/**
 * New node file
 */
var validator = require('validator');
var Constants = require('../Constants');

function MsgPushTargetRegisterRequest(){
	this.targetName = undefined;
	this.maxPacketSize = undefined;
	this.maxWindowSize = undefined;
};

MsgPushTargetRegisterRequest.prototype.setTargetName = function setTargetName(value){
	this.targetName = value;
};

MsgPushTargetRegisterRequest.prototype.getTargetName = function getTargetName(){
	return this.targetName;
};

MsgPushTargetRegisterRequest.prototype.setMaxPacketSize = function setMaxPacketSize(value){
	this.maxPacketSize = value;
};

MsgPushTargetRegisterRequest.prototype.getMaxPacketSize = function getMaxPacketSize(){
	return this.maxPacketSize;
};

MsgPushTargetRegisterRequest.prototype.setMaxWindowSize = function setMaxWindowSize(value){
	this.maxWindowSize = value;
};

MsgPushTargetRegisterRequest.prototype.getMaxWindowSize = function getMaxWindowSize(){
	return this.maxWindowSize;
};

MsgPushTargetRegisterRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(this.targetName);
	buffer.writeUInt16(this.maxPacketSize);
	buffer.writeUInt8(this.maxWindowSize);
};

MsgPushTargetRegisterRequest.prototype.getSize = function getSize(){
	return 3+this.targetName.length+1;
};

MsgPushTargetRegisterRequest.prototype.toString = function toString(){
	var str = "";
	str+="Target-Name: "+this.targetName+"\n";
	str+="Max Packet-Size: "+this.maxPacketSize.toString(16)+"\n";
	str+="Max Window-Size: "+this.maxWindowSize.toString(16)+"\n";
	return str;
};

MsgPushTargetRegisterRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.PUSH_TARGET_REGISTER_RESPONSE;
};

MsgPushTargetRegisterRequest.parse = function parse(buffer) {
	var message = new MsgPushTargetRegisterRequest();
	message.setTargetName(buffer.readUInt8String());
	message.setMaxPacketSize(buffer.readUInt16());
	message.setMaxWindowSize(buffer.readUInt8());
	
	return message;
};

module.exports = MsgPushTargetRegisterRequest;