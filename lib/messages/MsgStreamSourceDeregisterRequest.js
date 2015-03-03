
var Constants = require('../Constants');

function MsgStreamSourceDeregisterRequest(){
	this.sourceName = undefined;
};

MsgStreamSourceDeregisterRequest.prototype.setSourceName = function setSourceName(value){
	this.sourceName = value;
};

MsgStreamSourceDeregisterRequest.prototype.getSourceName = function getSourceName(){
	return this.sourceName;
};

MsgStreamSourceDeregisterRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(this.sourceName);
};

MsgStreamSourceDeregisterRequest.prototype.getSize = function getSize(){
	return this.sourceName.length+1;
};

MsgStreamSourceDeregisterRequest.prototype.toString = function toString(){
	var str = "";
	str+="Source-Name: "+this.sourceName+"\n";
	return str;
};

MsgStreamSourceDeregisterRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.STREAM_SOURCE_DEREGISTER_RESPONSE;
};

MsgStreamSourceDeregisterRequest.parse = function parse(buffer) {
	var message = new MsgStreamSourceDeregisterRequest();
	message.setSourceName(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgStreamSourceDeregisterRequest;