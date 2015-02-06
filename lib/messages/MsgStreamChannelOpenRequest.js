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


MsgStreamChannelOpenRequest.prorotype.setSourceName = function setSourceName(value){
	if(!validator.isByteLength(value, 1, 255)){
		throw new Error("Source-Name too long!");
	}
	if(!validator.isAlphanumeric(value)){
		throw new Error("Source-Name not a string!");
	}
	sourceName = value;
};

MsgStreamChannelOpenRequest.prorotype.getSourceName = function getSourceName(){
	return sourceName;
};

MsgStreamChannelOpenRequest.prorotype.setStreamNumber = function setStreamNumber(value){
	if(!validator.isInt(value)){
		throw new Error("Stream-Number not an integer!");
	}	
	if(value<0){
		throw new Error("Stream-Number must be >= 0 !");
	}
	if(!validator.isByteLength(value, 1, 4)){
		throw new Error("Stream-Number out of range!");
	}
	streamNumber = value;
};

MsgStreamChannelOpenRequest.prorotype.getStreamNumber = function getStreamNumber(){
	return streamNumber;
};

MsgStreamChannelOpenRequest.prorotype.setAckTimeout = function setAckTimeout(value){
	if(!validator.isInt(value)){
		throw new Error("ACK-Timeout not an integer!");
	}	
	if(value<0){
		throw new Error("ACK-Timeout must be >= 0 !");
	}
	if(!validator.isByteLength(value, 1, 2)){
		throw new Error("ACK-Timeout out of range!");
	}
	ackTimeout = value;
};

MsgStreamChannelOpenRequest.prorotype.getAckTimeout = function getAckTimeout(){
	return ackTimeout;
};

MsgStreamChannelOpenRequest.prorotype.setMaxPacketSize = function setMaxPacketSize(value){
	if(!validator.isInt(value)){
		throw new Error("Max-Packet-Size not an integer!");
	}	
	if(value<0){
		throw new Error("Max-Packet-Size must be >= 0 !");
	}
	if(!validator.isByteLength(value, 1, 2)){
		throw new Error("Max-Packet-Size out of range!");
	}
	maxPacketSize = value;
};

MsgStreamChannelOpenRequest.prorotype.getMaxPacketSize = function getMaxPacketSize(){
	return maxPacketSize;
};

MsgStreamChannelOpenRequest.prorotype.setMaxWindowSize = function setMaxWindowSize(value){
	if(!validator.isInt(value)){
		throw new Error("Max-Window-Size not an integer!");
	}	
	if(value<0){
		throw new Error("Max-Window-Size must be >= 0 !");
	}
	if(!validator.isByteLength(value, 1, 2)){
		throw new Error("Max-Window-Size out of range!");
	}
	maxWindowSize = value;
};

MsgStreamChannelOpenRequest.prorotype.getMaxWindowSize = function getMaxWindowSize(){
	return maxWindowSize;
};

MsgStreamChannelOpenRequest.prorotype.write = function write(buffer) {	
	console.log("Source Name: "+sourceName);
	console.log("Stream Number: "+streamNumber.toString(16));
	console.log("Ack Timeout: "+ackTimeout.toString(16));
	console.log("Max Packet Size: "+maxPacketSize.toString(16));
	console.log("Max Window Size: "+maxWindowSize.toString(16));
	
	buffer.writeUInt8String(sourceName);
	buffer.writeUInt32(streamNumber);
	buffer.writeUInt16(ackTimeout);
	buffer.writeUInt16(maxPacketSize);
	buffer.writeUInt16(maxWindowSize);
};

MsgStreamChannelOpenRequest.prorotype.getSize = function getSize(){
	var size = 10;
	size += sourceName.length+1;
	return size;
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