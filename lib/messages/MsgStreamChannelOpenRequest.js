/**
 * New node file
 */
var validator = require('validator');
var Constants = require('../Constants');

function MsgStreamChannelOpenRequest(){
	this.sourceName = undefined;
	this.streamNumber = undefined;
	this.ackTimeout = undefined;
	this.maxPacketSize = undefined;
	this.maxWindowSize = undefined;
};

MsgStreamChannelOpenRequest.prototype.setSourceName = function setSourceName(value){
	this.sourceName = value;
};

MsgStreamChannelOpenRequest.prototype.getSourceName = function getSourceName(){
	return this.sourceName;
};

MsgStreamChannelOpenRequest.prototype.setStreamNumber = function setStreamNumber(value){
	this.streamNumber = value;
};

MsgStreamChannelOpenRequest.prototype.getStreamNumber = function getStreamNumber(){
	return this.streamNumber;
};

MsgStreamChannelOpenRequest.prototype.setAckTimeout = function setAckTimeout(value){
	this.ackTimeout = value;
};

MsgStreamChannelOpenRequest.prototype.getAckTimeout = function getAckTimeout(){
	return this.ackTimeout;
};

MsgStreamChannelOpenRequest.prototype.setMaxPacketSize = function setMaxPacketSize(value){
	this.maxPacketSize = value;
};

MsgStreamChannelOpenRequest.prototype.getMaxPacketSize = function getMaxPacketSize(){
	return this.maxPacketSize;
};

MsgStreamChannelOpenRequest.prototype.setMaxWindowSize = function setMaxWindowSize(value){
	this.maxWindowSize = value;
};

MsgStreamChannelOpenRequest.prototype.getMaxWindowSize = function getMaxWindowSize(){
	return this.maxWindowSize;
};

MsgStreamChannelOpenRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(this.sourceName);
	buffer.writeUInt32(this.streamNumber);
	buffer.writeUInt16(this.ackTimeout);
	buffer.writeUInt16(this.maxPacketSize);
	buffer.writeUInt16(this.maxWindowSize);
};

MsgStreamChannelOpenRequest.prototype.getSize = function getSize(){
	return 10+this.sourceName.length+1;
};

MsgStreamChannelOpenRequest.prototype.toString = function toString(){
	var str = "";
	str+="Source-Name: "+this.sourceName+"\n";
	str+="Stream-Number: "+this.streamNumber.toString(16)+"\n";
	str+="ACK-Timeout: "+this.ackTimeout.toString(16)+"\n";
	str+="Max Packet-Size: "+this.maxPacketSize.toString(16)+"\n";
	str+="Max Window-Size: "+this.maxWindowSize.toString(16)+"\n";	
	return str;
};

MsgStreamChannelOpenRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.STREAM_CHANNEL_OPEN_RESPONSE;
};

MsgStreamChannelOpenRequest.parse = function parse(buffer) {
	var message = new MsgStreamChannelOpenRequest();
	message.setSourceName(buffer.readUInt8String());
	message.setStreamNumber(buffer.readUInt32());
	message.setAckTimeout(buffer.readUInt16());
	message.setMaxPacketSize(buffer.readUInt16());
	message.setMaxWindowSize(buffer.readUInt16());
	
	return message;
};

module.exports = MsgStreamChannelOpenRequest;