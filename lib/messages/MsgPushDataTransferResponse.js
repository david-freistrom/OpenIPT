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
	response = undefined;
	channelNumber = undefined;
	dataSourceId = undefined;
	status = undefined;
	blockNumber = undefined;
};

MsgPushDataTransferResponse.prototype.setResponse = function setResponse(value){
	
	if(!validator.isInt(value)){
		throw new Error("Response value not an integer!");
	}	
	if(value< 0x00 || value>0x03){
		throw new Error("Unknown Response value!");
	}
	
	response = value;
};

MsgPushDataTransferResponse.prototype.getResponse = function getResponse(){
	return response;
};

MsgPushDataTransferResponse.prototype.setChannelNumber = function setChannelNumber(value){
	if(!validator.isInt(value)){
		throw new Error("Channel-Number not an integer!");
	}	
	if(value<0){
		throw new Error("Channel-Number must be >= 0 !");
	}
	if(!validator.isByteLength(value, 1, 4)){
		throw new Error("Channel-Number out of range!");
	}
	channelNumber = value;
};

MsgPushDataTransferResponse.prototype.getChannelNumber = function getChannelNumber(){
	return channelNumber;
};

MsgPushDataTransferResponse.prototype.setDataSourceId = function setDataSourceId(value){
	if(!validator.isInt(value)){
		throw new Error("Data-Source-ID not an integer!");
	}	
	if(value<0){
		throw new Error("Data-Source-ID must be >= 0 !");
	}
	if(!validator.isByteLength(value, 1, 4)){
		throw new Error("Data-Source-ID out of range!");
	}
	dataSourceId = value;
};

MsgPushDataTransferResponse.prototype.getDataSourceId = function getDataSourceId(){
	return dataSourceId;
};

MsgPushDataTransferResponse.prototype.setStatus = function setStatus(value){
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

MsgPushDataTransferResponse.prototype.getStatus = function getStatus(){
	return status;
};

MsgPushDataTransferResponse.prototype.setBlockNumber = function setBlockNumber(value){
	if(!validator.isInt(value)){
		throw new Error("Block-Number not an integer!");
	}	
	if(value<0){
		throw new Error("Block-Number must be >= 0 !");
	}
	if(!validator.isByteLength(value, 1, 1)){
		throw new Error("Block-Number out of range!");
	}
	blockNumber = value;
};

MsgPushDataTransferResponse.prototype.getBlockNumber = function getBlockNumber(){
	return blockNumber;
};

MsgPushDataTransferResponse.prototype.write = function write(buffer) {		
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

MsgPushDataTransferResponse.prototype.getSize = function getSize(){
	var size = 11;
	return size;
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