
var Constants = require('../Constants');

function MsgStreamDataTransferRequest(){
	this.streamNumber = undefined;
	this.status = undefined;
	this.blockNumber = undefined;
	this.dataBlock = undefined;
};


MsgStreamDataTransferRequest.prototype.setStreamNumber = function setStreamNumber(value){
	this.streamNumber = value;
};

MsgStreamDataTransferRequest.prototype.getStreamNumber = function getStreamNumber(){
	return this.streamNumber;
};

MsgStreamDataTransferRequest.prototype.setBlockNumber = function setBlockNumber(value){
	this.blockNumber = value;
};

MsgStreamDataTransferRequest.prototype.getBlockNumber = function getBlockNumber(){
	return this.blockNumber;
};

MsgStreamDataTransferRequest.prototype.setDataBlock = function setDataBlock(value){
	this.dataBlock = value;
};

MsgStreamDataTransferRequest.prototype.getDataBlock = function getDataBlock(){
	return this.dataBlock;
};

MsgStreamDataTransferRequest.prototype.setStatus = function setStatus(value){
	this.status = value;
};

MsgStreamDataTransferRequest.prototype.getStatus = function getStatus(){
	return this.status;
};

MsgStreamDataTransferRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt32(this.streamNumber);
	buffer.writeUInt8(this.status);
	buffer.writeUInt8(this.blockNumber);
	buffer.writeUInt8VarArray(this.dataBlock);
};

MsgStreamDataTransferRequest.prototype.getSize = function getSize(){
	return 6 + this.dataBlock.length+1;
};

MsgStreamDataTransferRequest.prototype.toString = function toString(){
	var str = "";
	str+="Stream-Number: "+this.streamNumber.toString(16)+"\n";
	str+="Status: "+this.status.toString(16)+"\n";
	str+="Block-Number: "+this.blockNumber.toString(16)+"\n";
	str+="Data-Block: "+this.dataBlock+"\n";
	return str;
};

MsgStreamDataTransferRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.STREAM_DATA_TRANSFER_RESPONSE;
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