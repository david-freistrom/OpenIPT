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

	this.setSourceName = function setSourceName(value){
		if(!validator.isByteLength(value, 1, 255)){
			throw new Error("Source Name to long! Max length: 255");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Source Name not a String!");
		}
		sourceName = value;
	};
	
	this.getSourceName = function getSourceName(){
		return sourceName;
	};
	
	this.setStreamNumber = function setStreamNumber(value){
		if(!validator.isInt(value)){
			throw new Error("Stream Number is not an integer!");
		}	
		if(value<0){
			throw new Error("Stream Number must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 4)){
			throw new Error("Stream Number out of range!");
		}
		streamNumber = value;
	};
	
	this.getStreamNumber = function getStreamNumber(){
		return streamNumber;
	};
	
	this.setAckTimeout = function setAckTimeout(value){
		if(!validator.isInt(value)){
			throw new Error("ACK Timeout is not an integer!");
		}	
		if(value<0){
			throw new Error("ACK Timeout must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 2)){
			throw new Error("ACK Timeout out of range!");
		}
		ackTimeout = value;
	};
	
	this.getAckTimeout = function getAckTimeout(){
		return ackTimeout;
	};
	
	this.setMaxPacketSize = function setMaxPacketSize(value){
		if(!validator.isInt(value)){
			throw new Error("Max Packet Size is not an integer!");
		}	
		if(value<0){
			throw new Error("Max Packet Size must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 2)){
			throw new Error("Max Packet Size out of range!");
		}
		maxPacketSize = value;
	};
	
	this.getMaxPacketSize = function getMaxPacketSize(){
		return maxPacketSize;
	};
	
	this.setMaxWindowSize = function setMaxWindowSize(value){
		if(!validator.isInt(value)){
			throw new Error("Max Window Size is not an integer!");
		}	
		if(value<0){
			throw new Error("Max Window Size must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 2)){
			throw new Error("Max Window Size out of range!");
		}
		maxWindowSize = value;
	};
	
	this.getMaxWindowSize = function getMaxWindowSize(){
		return maxWindowSize;
	};
	
	this.write = function write(buffer) {	
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
	
	this.getSize = function getSize(){
		var size = 10;
		size += sourceName.length+1;
		return size;
	};
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