/**
 * New node file
 */

var PushTargetNameReq = require('./helper/PushTargetNameReq');
var Constants = require('../Constants');
var validator = require('validator');

function MsgPushChannelOpenRequest(){
	this.target = undefined;
	this.ackTimeout = undefined;
};

MsgPushChannelOpenRequest.prototype.setTarget = function setTarget(value){
	this.target = value;	
};

MsgPushChannelOpenRequest.prototype.getTarget = function getTarget(){
	return this.target;
};

MsgPushChannelOpenRequest.prototype.setAckTimeout = function setAckTimeout(value){
	this.ackTimeout = value;
};

MsgPushChannelOpenRequest.prototype.getAckTimeout = function getAckTimeout(){
	return this.ackTimeout;
};

MsgPushChannelOpenRequest.prototype.write = function write(buffer) {				
	this.target.write(buffer);
	buffer.writeUInt16(this.ackTimeout);
};

MsgPushChannelOpenRequest.prototype.getSize = function getSize(){
	return 2+this.target.getSize();
};

MsgPushChannelOpenRequest.prototype.toString = function toString(){
	var str = "";
	str+=this.target.toString();
	str+="ACK-Timeout: "+this.ackTimeout+"\n";
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