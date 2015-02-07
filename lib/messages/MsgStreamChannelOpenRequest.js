/**
 * New node file
 */
var validator = require('validator');

var sourceName;
var streamNumber;
var ackTimeout;
var maxPacketSize;
var maxWindowSize;

function MsgStreamChannelOpenRequest(){
	sourceName = undefined;
	streamNumber = undefined;
	ackTimeout = undefined;
	maxPacketSize = undefined;
	maxWindowSize = undefined;
};


MsgStreamChannelOpenRequest.prototype.setSourceName = function setSourceName(value){
//	if(!validator.isByteLength(value, 1, 255)){
//		throw new Error("Source-Name too long!");
//	}
//	if(!validator.isAlphanumeric(value)){
//		throw new Error("Source-Name not a string!");
//	}
	sourceName = value;
};

MsgStreamChannelOpenRequest.prototype.getSourceName = function getSourceName(){
	return sourceName;
};

MsgStreamChannelOpenRequest.prototype.setStreamNumber = function setStreamNumber(value){
//	if(!validator.isInt(value)){
//		throw new Error("Stream-Number not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Stream-Number must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 4)){
//		throw new Error("Stream-Number out of range!");
//	}
	streamNumber = value;
};

MsgStreamChannelOpenRequest.prototype.getStreamNumber = function getStreamNumber(){
	return streamNumber;
};

MsgStreamChannelOpenRequest.prototype.setAckTimeout = function setAckTimeout(value){
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

MsgStreamChannelOpenRequest.prototype.getAckTimeout = function getAckTimeout(){
	return ackTimeout;
};

MsgStreamChannelOpenRequest.prototype.setMaxPacketSize = function setMaxPacketSize(value){
//	if(!validator.isInt(value)){
//		throw new Error("Max-Packet-Size not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Max-Packet-Size must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 2)){
//		throw new Error("Max-Packet-Size out of range!");
//	}
	maxPacketSize = value;
};

MsgStreamChannelOpenRequest.prototype.getMaxPacketSize = function getMaxPacketSize(){
	return maxPacketSize;
};

MsgStreamChannelOpenRequest.prototype.setMaxWindowSize = function setMaxWindowSize(value){
//	if(!validator.isInt(value)){
//		throw new Error("Max-Window-Size not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Max-Window-Size must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 2)){
//		throw new Error("Max-Window-Size out of range!");
//	}
	maxWindowSize = value;
};

MsgStreamChannelOpenRequest.prototype.getMaxWindowSize = function getMaxWindowSize(){
	return maxWindowSize;
};

MsgStreamChannelOpenRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(sourceName);
	buffer.writeUInt32(streamNumber);
	buffer.writeUInt16(ackTimeout);
	buffer.writeUInt16(maxPacketSize);
	buffer.writeUInt16(maxWindowSize);
};

MsgStreamChannelOpenRequest.prototype.getSize = function getSize(){
	var size = 10;
	size += sourceName.length+1;
	return size;
};

MsgStreamChannelOpenRequest.prototype.toString = function toString(){
	var str = "";
	str+="Source-Name: "+sourceName+"\n";
	str+="Stream-Number: "+streamNumber.toString(16)+"\n";
	str+="ACK-Timeout: "+ackTimeout.toString(16)+"\n";
	str+="Max Packet-Size: "+maxPacketSize.toString(16)+"\n";
	str+="Max Window-Size: "+maxWindowSize.toString(16)+"\n";	
	return str;
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