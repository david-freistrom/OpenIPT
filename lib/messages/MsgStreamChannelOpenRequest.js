/**
 * New node file
 */

var sourceName;
var streamNumber;
var ackTimeout;
var maxPacketSize;
var maxWindowSize;

function MsgStreamChannelOpenRequest(){

	this.setSourceName = function setSourceName(value){
		sourceName = value;
	};
	
	this.getSourceName = function getSourceName(){
		return sourceName;
	};
	
	this.setStreamNumber = function setStreamNumber(value){
		streamNumber = value;
	};
	
	this.getStreamNumber = function getStreamNumber(){
		return streamNumber;
	};
	
	this.setAckTimeout = function setAckTimeout(value){
		ackTimeout = value;
	};
	
	this.getAckTimeout = function getAckTimeout(){
		return ackTimeout;
	};
	
	this.setMaxPacketSize = function setMaxPacketSize(value){
		maxPacketSize = value;
	};
	
	this.getMaxPacketSize = function getMaxPacketSize(){
		return maxPacketSize;
	};
	
	this.setMaxWindowSize = function setMaxWindowSize(value){
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
		size += sourceName.length;
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