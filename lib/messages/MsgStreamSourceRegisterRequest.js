
var Constants = require('../Constants');

function MsgStreamSourceRegisterRequest(){
	this.sourceName = undefined;
};

MsgStreamSourceRegisterRequest.prototype.setSourceName = function setSourceName(value){
	this.sourceName = value;
};

MsgStreamSourceRegisterRequest.prototype.getSourceName = function getSourceName(){
	return this.sourceName;
};

MsgStreamSourceRegisterRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(this.sourceName);
};

MsgStreamSourceRegisterRequest.prototype.getSize = function getSize(){
	return this.sourceName.length+1;
};

MsgStreamSourceRegisterRequest.prototype.toString = function toString(){
	var str = "";
	str+="Source-Name: "+this.sourceName+"\n";
	return str;
};

MsgStreamSourceRegisterRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.STREAM_SOURCE_REGISTER_RESPONSE;
};

MsgStreamSourceRegisterRequest.parse = function parse(buffer) {
	var message = new MsgStreamSourceRegisterRequest();
	message.setSourceName(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgStreamSourceRegisterRequest;