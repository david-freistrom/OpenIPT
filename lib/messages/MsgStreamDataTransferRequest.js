/**
 * New node file
 */
var validator = require('validator');

var streamNumber;
var status;
var blockNumber;
var dataBlock;

function MsgStreamDataTransferRequest(){

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
	
	this.write = function write(buffer) {	
		console.log("Stream Number: "+streamNumber.toString(16));
		console.log("Status: "+status.toString(16));
		console.log("Block Number: "+blockNumber.toString(16));
		console.log("Data Block: "+dataBlock.toString(16));
		
		
		buffer.writeUInt32(streamNumber);
		buffer.writeUInt8(status);
		buffer.writeUInt8(blockNumber);
		buffer.writeUInt8VarArray(dataBlock);
	};
	
	this.getSize = function getSize(){
		var size = 6;
		size += dataBlock.length+1;
		return size;
	};
};

MsgStreamDataTransferRequest.parse = function parse(buffer) {
	var message = new MsgStreamDataTransferRequest();
	message.setStreamNumber(buffer.readUInt32());
	message.setStatus(buffer.readUInt8());
	message.setBlockNumber(buffer.readUInt8());
	message.setDataBlock(buffer.readUInt8VarArray());
	
	return message;
};

module.exports = MsgStreamDataTransferRequest;