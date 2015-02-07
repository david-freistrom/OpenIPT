/**
 * New node file
 */
var validator = require('validator');
var Constants = require('../Constants');

var sourceName;

function MsgStreamSourceRegisterRequest(){
	sourceName = undefined;
};

MsgStreamSourceRegisterRequest.prototype.setSourceName = function setSourceName(value){
//	if(!validator.isByteLength(value, 1, 255)){
//		throw new Error("Source-Name too long!");
//	}
//	if(!validator.isAlphanumeric(value)){
//		throw new Error("Source-Name not a string!");
//	}
	sourceName = value;
};

MsgStreamSourceRegisterRequest.prototype.getSourceName = function getSourceName(){
	return sourceName;
};

MsgStreamSourceRegisterRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(sourceName);
};

MsgStreamSourceRegisterRequest.prototype.getSize = function getSize(){
	var size = 0;
	size += sourceName.length+1;
	return size;
};

MsgStreamSourceRegisterRequest.prototype.toString = function toString(){
	var str = "";
	str+="Source-Name: "+sourceName+"\n";
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