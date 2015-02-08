/**
 * New node file
 */
var validator = require('validator');

function MsgPushChannelCloseResponse(){
	this.response = undefined;
	this.channelNumber = undefined;
};

MsgPushChannelCloseResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgPushChannelCloseResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgPushChannelCloseResponse.prototype.setChannelNumber = function setChannelNumber(value){
	this.channelNumber = value;
};

MsgPushChannelCloseResponse.prototype.getChannelNumber = function getChannelNumber(){
	return this.channelNumber;
};

MsgPushChannelCloseResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8(this.response);
	buffer.writeUInt32(this.channelNumber);
};

MsgPushChannelCloseResponse.prototype.getSize = function getSize(){
	return 5;
};

MsgPushChannelCloseResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	str+="Channel-Number: "+this.channelNumber.toString(16)+"\n";
	return str;
};

MsgPushChannelCloseResponse.parse = function parse(buffer) {
	var message = new MsgPushChannelCloseResponse();
	message.setResponse(buffer.readUInt8());
	message.setChannelNumber(buffer.readUInt32());
	
	return message;
};

module.exports = MsgPushChannelCloseResponse;