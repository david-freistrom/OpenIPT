/**
 * New node file
 */
var validator = require('validator');
var Constants = require('../Constants');

function MsgStreamChannelCloseRequest(){
	this.streamNumber = undefined;
};

MsgStreamChannelCloseRequest.prototype.setStreamNumber = function setStreamNumber(value){
	this.streamNumber = value;
};

MsgStreamChannelCloseRequest.prototype.getStreamNumber = function getStreamNumber(){
	return this.streamNumber;
};

MsgStreamChannelCloseRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt32(this.streamNumber);
};

MsgStreamChannelCloseRequest.prototype.getSize = function getSize(){
	return 4;
};

MsgStreamChannelCloseRequest.prototype.toString = function toString(){
	var str = "";
	str+="Stream-Number: "+this.streamNumber.toString(16)+"\n";
	return str;
};

MsgStreamChannelCloseRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.STREAM_CHANNEL_CLOSE_RESPONSE;
};

MsgStreamChannelCloseRequest.parse = function parse(buffer) {
	var message = new MsgStreamChannelCloseRequest();
	message.setStreamNumber(buffer.readUInt32());
	
	return message;
};

module.exports = MsgStreamChannelCloseRequest;