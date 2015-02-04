/**
 * New node file
 */
var validator = require('validator');

var channelNumber;
var dataSourceId;
var status;
var blockNumber;
var dataBlock;

function MsgPushDataTransferRequest(){
	
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
	
	this.setDataBlock = function setDataBlock(value){
		dataBlock = value;
	};
	
	this.getDataBlock = function getDataBlock(){
		return dataBlock;
	};
	
	this.write = function write(buffer) {	
		console.log("Channel Number: "+channelNumber.toString(16));
		console.log("Data Source ID: "+dataSourceId.toString(16));
		console.log("Status: "+status.toString(16));
		console.log("Block Number: "+blockNumber.toString(16));
		console.log("Data Block: "+dataBlock.toString(16));
		
		buffer.writeUInt32(channelNumber);
		buffer.writeUInt32(dataSourceId);
		buffer.writeUInt8(status);
		buffer.writeUInt8(blockNumber);
		buffer.writeUInt8VarArray(dataBlock);
	};
	
	this.getSize = function getSize(){
		var size = 10;
		size += dataBlock.length;
		return size;
	};
};

MsgPushDataTransferRequest.parse = function parse(buffer) {
	var message = new MsgPushDataTransferRequest();
	message.setChannelNumber(buffer.readUInt32());
	message.setDataSourceId(buffer.readUInt32());
	message.setStatus(buffer.readUInt8());
	message.setBlockNumber(buffer.readUInt8());
	message.setDataBlock(buffer.readUInt8VarArray());
	
	return message;
};

module.exports = MsgPushDataTransferRequest;