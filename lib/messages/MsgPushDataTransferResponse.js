/**
 * New node file
 */

var response;
var channelNumber;
var dataSourceId;
var status;
var blockNumber;

function MsgPushDataTransferResponse(){
	
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
	
	this.setStatus = function setStatus(value){
		status = value;
	};
	
	this.getStatus = function getStatus(){
		return status;
	};
	
	this.setBlockNumber = function setBlockNumber(value){
		blockNumber = value;
	};
	
	this.getBlockNumber = function getBlockNumber(){
		return blockNumber;
	};
	
	this.write = function write(buffer) {		
		console.log("Response: "+response.toString(16));
		console.log("Channel Number: "+channelNumber.toString(16));
		console.log("Data Source ID: "+dataSourceId.toString(16));
		console.log("Status: "+status.toString(16));
		console.log("Block Number: "+blockNumber.toString(16));
		
		buffer.writeUInt8(response);
		buffer.writeUInt32(channelNumber);
		buffer.writeUInt32(dataSourceId);
		buffer.writeUInt8(status);
		buffer.writeUInt8(blockNumber);
	};

	this.getSize = function getSize(){
		var size = 11;
		return size;
	};
};

MsgPushDataTransferResponse.parse = function parse(buffer) {
	var message = new MsgPushDataTransferResponse();
	message.setResponse(buffer.readUInt8());
	message.setChannelNumber(buffer.readUInt32());
	message.setDataSourceId(buffer.readUInt32());
	message.setStatus(buffer.readUInt8());
	message.setBlockNumber(buffer.readUInt8());
	
	return message;
};

module.exports = MsgPushDataTransferResponse;