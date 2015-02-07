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
	channelNumber = undefined;
	dataSourceId = undefined;
	status = undefined;
	blockNumber = undefined;
	dataBlock = undefined;
};

MsgPushDataTransferRequest.prototype.setChannelNumber = function setChannelNumber(value){
//	if(!validator.isInt(value)){
//		throw new Error("Channel-Number not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Channel-Number must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 4)){
//		throw new Error("Channel-Number out of range!");
//	}
	channelNumber = value;
};

MsgPushDataTransferRequest.prototype.getChannelNumber = function getChannelNumber(){
	return channelNumber;
};

MsgPushDataTransferRequest.prototype.setDataSourceId = function setDataSourceId(value){
//	if(!validator.isInt(value)){
//		throw new Error("Data-Source-ID is not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Data-Source-ID must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 4)){
//		throw new Error("Data-Source-ID out of range!");
//	}
	dataSourceId = value;
};

MsgPushDataTransferRequest.prototype.getDataSourceId = function getDataSourceId(){
	return dataSourceId;
};

MsgPushDataTransferRequest.prototype.setStatus = function setStatus(value){
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

MsgPushDataTransferRequest.prototype.getStatus = function getStatus(){
	return status;
};

MsgPushDataTransferRequest.prototype.setBlockNumber = function setBlockNumber(value){
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

MsgPushDataTransferRequest.prototype.getBlockNumber = function getBlockNumber(){
	return blockNumber;
};

MsgPushDataTransferRequest.prototype.setDataBlock = function setDataBlock(value){
	dataBlock = value;
};

MsgPushDataTransferRequest.prototype.getDataBlock = function getDataBlock(){
	return dataBlock;
};

MsgPushDataTransferRequest.prototype.write = function write(buffer) {		
	buffer.writeUInt32(channelNumber);
	buffer.writeUInt32(dataSourceId);
	buffer.writeUInt8(status);
	buffer.writeUInt8(blockNumber);
	buffer.writeUInt8VarArray(dataBlock);
};

MsgPushDataTransferRequest.prototype.getSize = function getSize(){
	var size = 10;
	size += dataBlock.length;
	return size;
};

MsgPushDataTransferRequest.prototype.toString = function toString(){
	var str = "";
	str+="Channel-Number: "+channelNumber.toString(16)+"\n";
	str+="Data-Source-ID: "+dataSourceId.toString(16)+"\n";
	str+="Status: "+status.toString(16)+"\n";
	str+="Target-Count: "+targetCount.toString(16)+"\n";
	str+="Block-Number: "+blockNumber.toString(16)+"\n";
	str+="Data-Block: "+dataBlock+"\n";
	return str;
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