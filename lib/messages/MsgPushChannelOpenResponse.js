/**
 * New node file
 */
var validator = require('validator');

var response;
var channelNumber;
var dataSourceId;
var maxPacketSize;
var maxWindowSize;
var status;
var targetCount;

function MsgPushChannelOpenResponse(){
	
	this.setResponse = function setResponse(value){
		
		if(!validator.isInt(value)){
			throw new Error("Response is not an integer!");
		}	
		if(value< 0x00 || value>0x03){
			throw new Error("Response value not defined! Allowed values are 0x00, 0x01, 0x02, 0x03. See documentation for details.");
		}
		
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.setChannelNumber = function setChannelNumber(value){
		if(!validator.isInt(value)){
			throw new Error("Channel Number is not an integer!");
		}	
		if(value<0){
			throw new Error("Channel Number must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 4)){
			throw new Error("Channel Number out of range!");
		}
		channelNumber = value;
	};
	
	this.getChannelNumber = function getChannelNumber(){
		return channelNumber;
	};
	
	this.setDataSourceId = function setDataSourceId(value){
		if(!validator.isInt(value)){
			throw new Error("Data Source ID is not an integer!");
		}	
		if(value<0){
			throw new Error("Data Source ID must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 4)){
			throw new Error("Data Source ID out of range!");
		}
		dataSourceId = value;
	};
	
	this.getDataSourceId = function getDataSourceId(){
		return dataSourceId;
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
		if(!validator.isByteLength(value, 1, 1)){
			throw new Error("Max Window Size out of range!");
		}
		maxWindowSize = value;
	};
	
	this.getMaxWindowSize = function getMaxWindowSize(){
		return maxWindowSize;
	};
	
	this.setStatus = function setStatus(value){
		if(!validator.isInt(value)){
			throw new Error("Status is not an integer!");
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
	
	this.setTargetCount = function setTargetCount(value){
		if(!validator.isInt(value)){
			throw new Error("Target Count is not an integer!");
		}	
		if(value<0){
			throw new Error("Target Count must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 4)){
			throw new Error("Target Count out of range!");
		}
		targetCount = value;
	};
	
	this.getTargetCount = function getTargetCount(){
		return targetCount;
	};
	
	this.write = function write(buffer) {
		console.log("Response: "+response.toString(16));
		console.log("Channel Number: "+channelNumber.toString(16));
		console.log("Data Source ID: "+dataSourceId.toString(16));
		console.log("Max Packet Size: "+maxPacketSize.toString(16));
		console.log("Max Window Size: "+maxWindowSize.toString(16));
		console.log("Status: "+status.toString(16));
		console.log("Target Count: "+targetCount.toString(16));
		
		buffer.writeUInt8(response);
		buffer.writeUInt32(channelNumber);
		buffer.writeUInt32(dataSourceId);
		buffer.writeUInt16(maxPacketSize);
		buffer.writeUInt8(maxWindowSize);
		buffer.writeUInt8(status);
		buffer.writeUInt32(targetCount);
	};
	
	this.getSize = function getSize(){
		var size = 17;
		return size;
	};
};

MsgPushChannelOpenResponse.parse = function parse(buffer) {
	var message = new MsgPushChannelOpenResponse();
	message.setResponse(buffer.readUInt8());
	message.setChannelNumber(buffer.readUInt32());
	message.setDataSourceId(buffer.readUInt32());
	message.setMaxPacketSize(buffer.readUInt16());
	message.setMaxWindowSize(buffer.readUInt8());
	message.setStatus(buffer.readUInt8());
	message.setTargetCount(buffer.readUInt32());
	
	return message;
};

module.exports = MsgPushChannelOpenResponse;