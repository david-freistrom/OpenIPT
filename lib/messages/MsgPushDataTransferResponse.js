/**
 * New node file
 */
var validator = require('validator');

var response;
var channelNumber;
var dataSourceId;
var status;
var blockNumber;

function MsgPushDataTransferResponse(){
	
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
	
	this.setBlockNumber = function setBlockNumber(value){
		if(!validator.isInt(value)){
			throw new Error("Block Number is not an integer!");
		}	
		if(value<0){
			throw new Error("Block Number must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 1)){
			throw new Error("Block Number out of range!");
		}
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