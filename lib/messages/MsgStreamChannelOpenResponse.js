/**
 * New node file
 */
var validator = require('validator');

var response;
var streamNumber;
var maxPacketSize;
var maxWindowSize;
var status;

function MsgStreamChannelOpenResponse(){
	
	this.setResponse = function setResponse(value){
		
		if(!validator.isInt(value)){
			throw new Error("Response value not an integer!");
		}	
		if(value< 0x00 || value>0x02){
			throw new Error("Unknown Response value!");
		}
		
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.setStreamNumber = function setStreamNumber(value){
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
	
	this.getStreamNumber = function getStreamNumber(){
		return streamNumber;
	};
	
	this.setMaxPacketSize = function setMaxPacketSize(value){
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
	
	this.getMaxPacketSize = function getMaxPacketSize(){
		return maxPacketSize;
	};
	
	this.setMaxWindowSize = function setMaxWindowSize(value){
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
	
	this.getMaxWindowSize = function getMaxWindowSize(){
		return maxWindowSize;
	};
	
	this.setStatus = function setStatus(value){
		if(!validator.isInt(value)){
			throw new Error("Status not an integer!");
		}	
		if(value<0){
			throw new Error("Status must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 1)){
			throw new Error("Status out of range!");
		}
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