/**
 * New node file
 */
var validator = require('validator');
var Constants = require('../Constants');

function MsgPushDataTransferRequest(){
	this.channelNumber = undefined;
	this.dataSourceId = undefined;
	this.status = undefined;
	this.blockNumber = undefined;
	this.dataBlock = undefined;
};

MsgPushDataTransferRequest.prototype.setChannelNumber = function setChannelNumber(value){
	this.channelNumber = value;
};

MsgPushDataTransferRequest.prototype.getChannelNumber = function getChannelNumber(){
	return this.channelNumber;
};

MsgPushDataTransferRequest.prototype.setDataSourceId = function setDataSourceId(value){
	this.dataSourceId = value;
};

MsgPushDataTransferRequest.prototype.getDataSourceId = function getDataSourceId(){
	return this.dataSourceId;
};

MsgPushDataTransferRequest.prototype.setStatus = function setStatus(value){
	this.status = value;
};

MsgPushDataTransferRequest.prototype.getStatus = function getStatus(){
	return this.status;
};

MsgPushDataTransferRequest.prototype.setBlockNumber = function setBlockNumber(value){
	this.blockNumber = value;
};

MsgPushDataTransferRequest.prototype.getBlockNumber = function getBlockNumber(){
	return this.blockNumber;
};

MsgPushDataTransferRequest.prototype.setDataBlock = function setDataBlock(value){
	this.dataBlock = value;
};

MsgPushDataTransferRequest.prototype.getDataBlock = function getDataBlock(){
	return this.dataBlock;
};

MsgPushDataTransferRequest.prototype.write = function write(buffer) {		
	buffer.writeUInt32(this.channelNumber);
	buffer.writeUInt32(this.dataSourceId);
	buffer.writeUInt8(this.status);
	buffer.writeUInt8(this.blockNumber);
	buffer.writeUInt8VarArray(this.dataBlock);
};

MsgPushDataTransferRequest.prototype.getSize = function getSize(){
	return 10+this.dataBlock.length;
};

MsgPushDataTransferRequest.prototype.toString = function toString(){
	var str = "";
	str+="Channel-Number: "+this.channelNumber.toString(16)+"\n";
	str+="Data-Source-ID: "+this.dataSourceId.toString(16)+"\n";
	str+="Status: "+this.status.toString(16)+"\n";
	str+="Block-Number: "+this.blockNumber.toString(16)+"\n";
	str+="Data-Block: "+this.dataBlock+"\n";
	
	return str;
};

MsgPushDataTransferRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.PUSH_DATA_TRANSFER_RESPONSE;
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