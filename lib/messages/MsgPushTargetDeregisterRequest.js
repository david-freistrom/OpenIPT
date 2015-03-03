/**
 * New node file
 */
var Constants = require('../Constants');

function MsgPushTargetDeregisterRequest(){
	this.targetName = undefined;
};

MsgPushTargetDeregisterRequest.prototype.setTargetName = function setTargetName(value){
	this.targetName = value;
};

MsgPushTargetDeregisterRequest.prototype.getTargetName = function getTargetName(){
	return this.targetName;
};

MsgPushTargetDeregisterRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(this.targetName);
};

MsgPushTargetDeregisterRequest.prototype.getSize = function getSize(){
	return this.targetName.length+1;
};

MsgPushTargetDeregisterRequest.prototype.toString = function toString(){
	var str = "";
	str+="Target-Name: "+this.targetName+"\n";
	return str;
};

MsgPushTargetDeregisterRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.PUSH_TARGET_DEREGISTER_RESPONSE;
};

MsgPushTargetDeregisterRequest.parse = function parse(buffer) {
	var message = new MsgPushTargetDeregisterRequest();
	message.setTargetName(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgPushTargetDeregisterRequest;