/**
 * New node file
 */
var validator = require('validator');

var streamNumber;
var status;
var blockNumber;
var dataBlock;

function MsgStreamDataTransferRequest(){
	streamNumber = undefined;
	status = undefined;
	blockNumber = undefined;
	dataBlock = undefined;
};


MsgStreamDataTransferRequest.prototype.setStreamNumber = function setStreamNumber(value){
//	if(!validator.isInt(value)){
//		throw new Error("Stream-Number not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Stream-Number must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 4)){
//		throw new Error("Stream-Number out of range!");
//	}
	streamNumber = value;
};

MsgStreamDataTransferRequest.prototype.getStreamNumber = function getStreamNumber(){
	return streamNumber;
};

MsgStreamDataTransferRequest.prototype.setBlockNumber = function setBlockNumber(value){
//	if(!validator.isInt(value)){
//		throw new Error("Block-Number not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Block-Number must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 1)){
//		throw new Error("Block-Number out of range!");
//	}
	blockNumber = value;
};

MsgStreamDataTransferRequest.prototype.getBlockNumber = function getBlockNumber(){
	return blockNumber;
};

MsgStreamDataTransferRequest.prototype.setDataBlock = function setDataBlock(value){
	dataBlock = value;
};

MsgStreamDataTransferRequest.prototype.getDataBlock = function getDataBlock(){
	return dataBlock;
};

MsgStreamDataTransferRequest.prototype.setStatus = function setStatus(value){
//	if(!validator.isInt(value)){
//		throw new Error("Status not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Status must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 1)){
//		throw new Error("Status out of range!");
//	}
	status = value;
};

MsgStreamDataTransferRequest.prototype.getStatus = function getStatus(){
	return status;
};

MsgStreamDataTransferRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt32(streamNumber);
	buffer.writeUInt8(status);
	buffer.writeUInt8(blockNumber);
	buffer.writeUInt8VarArray(dataBlock);
};

MsgStreamDataTransferRequest.prototype.getSize = function getSize(){
	var size = 6;
	size += dataBlock.length+1;
	return size;
};

MsgStreamDataTransferRequest.prototype.toString = function toString(){
	var str = "";
	str+="Stream-Number: "+streamNumber.toString(16)+"\n";
	str+="Status: "+status.toString(16)+"\n";
	str+="Block-Number: "+blockNumber.toString(16)+"\n";
	str+="Data-Block: "+dataBlock+"\n";
	return str;
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