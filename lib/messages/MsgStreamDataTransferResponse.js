/**
 * New node file
 */
var validator = require('validator');

var response;
var streamNumber;
var status;
var blockNumber;

function MsgStreamDataTransferResponse(){
	response = undefined;
	streamNumber = undefined;
	status = undefined;
	blockNumber = undefined;
};


MsgStreamDataTransferResponse.prototype.setResponse = function setResponse(value){
	
	if(!validator.isInt(value)){
		throw new Error("Response value not an integer!");
	}	
	if(value< 0x00 || value>0x02){
		throw new Error("Unknown Response value!");
	}
	
	response = value;
};

MsgStreamDataTransferResponse.prototype.getResponse = function getResponse(){
	return response;
};

MsgStreamDataTransferResponse.prototype.setStreamNumber = function setStreamNumber(value){
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

MsgStreamDataTransferResponse.prototype.getStreamNumber = function getStreamNumber(){
	return streamNumber;
};

MsgStreamDataTransferResponse.prototype.setBlockNumber = function setBlockNumber(value){
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

MsgStreamDataTransferResponse.prototype.getBlockNumber = function getBlockNumber(){
	return blockNumber;
};

MsgStreamDataTransferResponse.prototype.setStatus = function setStatus(value){
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

MsgStreamDataTransferResponse.prototype.getStatus = function getStatus(){
	return status;
};

MsgStreamDataTransferResponse.prototype.write = function write(buffer) {	
	console.log("Response: "+response.toString(16));
	console.log("Stream Number: "+streamNumber.toString(16));
	console.log("Status: "+status.toString(16));
	console.log("Block Number: "+blockNumber.toString(16));
	
	buffer.writeUInt8(response);
	buffer.writeUInt32(streamNumber);
	buffer.writeUInt8(status);
	buffer.writeUInt8(blockNumber);
};

MsgStreamDataTransferResponse.prototype.getSize = function getSize(){
	var size = 7;
	return size;
};

MsgStreamDataTransferResponse.parse = function parse(buffer) {
	var message = new MsgStreamDataTransferResponse();
	message.setResponse(buffer.readUInt8());
	message.setStreamNumber(buffer.readUInt32());
	message.setStatus(buffer.readUInt8());
	message.setBlockNumber(buffer.readUInt8());
	
	
	return message;
};


module.exports = MsgStreamDataTransferResponse;