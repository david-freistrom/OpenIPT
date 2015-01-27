/**
 * New node file
 */

var response;
var streamNumber;
var maxPacketSize;
var maxWindowSize;
var status;

function MsgStreamChannelOpenResponse(){
	
	this.setResponse = function setResponse(value){
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.setStreamNumber = function setStreamNumber(value){
		streamNumber = value;
	};
	
	this.getStreamNumber = function getStreamNumber(){
		return streamNumber;
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
	
	this.setStatus = function setStatus(value){
		status = value;
	};
	
	this.getStatus = function getStatus(){
		return status;
	};
	
	this.write = function write(buffer) {	
		console.log("Response: "+response.toString(16));
		console.log("Stream Number: "+streamNumber.toString(16));
		console.log("Max Packet Size: "+maxPacketSize.toString(16));
		console.log("Max Window Size: "+maxWindowSize.toString(16));
		console.log("Status: "+status.toString(16));
		
		buffer.writeUInt8(response);
		buffer.writeUInt32(streamNumber);
		buffer.writeUInt16(maxPacketSize);
		buffer.writeUInt8(maxWindowSize);
		buffer.writeUInt8(status);
	};
	
	this.getSize = function getSize(){
		var size = 11;
		return size;
	};
};

MsgStreamChannelOpenResponse.parse = function parse(buffer) {
	var message = new MsgStreamChannelOpenResponse();
	message.setSourceName(buffer.readUInt8());
	message.setStreamNumber(buffer.readUInt32());
	message.setMaxPacketSize(buffer.readUInt16());
	message.setMaxWindowSize(buffer.readUInt8());
	message.setStatus(buffer.readUInt8());
	
	return message;
};

module.exports = MsgStreamChannelOpenResponse;