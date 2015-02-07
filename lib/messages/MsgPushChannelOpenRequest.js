/**
 * New node file
 */

var PushTargetNameReq = require('./helper/PushTargetNameReq');
var Constants = require('../Constants');

var validator = require('validator');

var target;
var ackTimeout;

function MsgPushChannelOpenRequest(){
	target = undefined;
	ackTimeout = undefined;
};

MsgPushChannelOpenRequest.prototype.setTarget = function setTarget(value){
	target = value;	
};

MsgPushChannelOpenRequest.prototype.getTarget = function getTarget(){
	return target;
};

MsgPushChannelOpenRequest.prototype.setAckTimeout = function setAckTimeout(value){
//	if(!validator.isInt(value)){
//		throw new Error("ACK-Timeout not an integer!");
//	}	
//	if(value<0){
//		throw new Error("ACK-Timeout must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 2)){
//		throw new Error("ACK-Timeout out of range!");
//	}
	ackTimeout = value;
};

MsgPushChannelOpenRequest.prototype.getAckTimeout = function getAckTimeout(){
	return ackTimeout;
};

MsgPushChannelOpenRequest.prototype.write = function write(buffer) {				
	target.write(buffer);
	buffer.writeUInt16(ackTimeout);
};

MsgPushChannelOpenRequest.prototype.getSize = function getSize(){
	var size = 2;
	size += target.getSize();
	return size;
};

MsgPushChannelOpenRequest.prototype.toString = function toString(){
	var str = "";
	str+=target.toString();
	str+="ACK-Timeout: "+ackTimeout+"\n";
	return str;
};

MsgPushChannelOpenRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.PUSH_CHANNEL_OPEN_RESPONSE;
};

MsgPushChannelOpenRequest.parse = function parse(buffer) {
	var message = new MsgPushChannelOpenRequest();
	message.setTarget(PushTargetNameReq.parse(buffer));
	message.setAckTimeout(buffer.readUInt16());
	
	return message;
};

module.exports = MsgPushChannelOpenRequest;