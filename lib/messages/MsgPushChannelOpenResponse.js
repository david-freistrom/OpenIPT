/**
 * New node file
 */

var response;
var channelNumber;
var dataSourceId;
var maxPacketSize;
var maxWindowSize;
var status;
var targetCount;

function MsgPushChannelOpenResponse(){
	
	this.setResponse = function setResponse(value){
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.setChannelNumber = function setChannelNumber(value){
		channelNumber = value;
	};
	
	this.getChannelNumber = function getChannelNumber(){
		return channelNumber;
	};
	
	this.setDataSourceId = function setDataSourceId(value){
		dataSourceId = value;
	};
	
	this.getDataSourceId = function getDataSourceId(){
		return dataSourceId;
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
	
	this.setTargetCount = function setTargetCount(value){
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