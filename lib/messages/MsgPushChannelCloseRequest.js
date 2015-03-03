/**
 * New node file
 */
var Constants = require('../Constants');

function MsgPushChannelCloseRequest(){
	this.channelNumber = undefined;
};

MsgPushChannelCloseRequest.prototype.setChannelNumber = function setChannelNumber(value){
	this.channelNumber = value;
};

MsgPushChannelCloseRequest.prototype.getChannelNumber = function getChannelNumber(){
	return this.channelNumber;
};

MsgPushChannelCloseRequest.prototype.write = function write(buffer) {
	buffer.writeUInt32(this.channelNumber);
};

MsgPushChannelCloseRequest.prototype.getSize = function getSize(){
	return 4;
};

MsgPushChannelCloseRequest.prototype.toString = function toString(){
	var str = "";
	str+="Channel-Number: "+this.channelNumber.toString(16)+"\n";
	return str;
};

MsgPushChannelCloseRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.PUSH_CHANNEL_CLOSE_RESPONSE;
};

MsgPushChannelCloseRequest.parse = function parse(buffer) {
	var message = new MsgPushChannelCloseRequest();
	message.setChannelNumber(buffer.readUInt32());
	
	return message;
};

module.exports = MsgPushChannelCloseRequest;