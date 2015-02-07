/**
 * New node file
 */
var validator = require('validator');
var Constants = require('../Constants');

var sourceName;

function MsgStreamSourceDeregisterRequest(){
	sourceName = undefined;
};

MsgStreamSourceDeregisterRequest.prototype.setSourceName = function setSourceName(value){
//	if(!validator.isByteLength(value, 1, 255)){
//		throw new Error("Source-Name too long!");
//	}
//	if(!validator.isAlphanumeric(value)){
//		throw new Error("Source-Name not a string!");
//	}
	sourceName = value;
};

MsgStreamSourceDeregisterRequest.prototype.getSourceName = function getSourceName(){
	return sourceName;
};

MsgStreamSourceDeregisterRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(sourceName);
};

MsgStreamSourceDeregisterRequest.prototype.getSize = function getSize(){
	var size = 0;
	size += sourceName.length+1;
	return size;
};

MsgStreamSourceDeregisterRequest.prototype.toString = function toString(){
	var str = "";
	str+="Source-Name: "+sourceName+"\n";
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