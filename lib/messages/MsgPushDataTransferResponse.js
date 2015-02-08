/**
 * New node file
 */
var validator = require('validator');

function MsgPushDataTransferResponse(){
	this.response = undefined;
	this.channelNumber = undefined;
	this.dataSourceId = undefined;
	this.status = undefined;
	this.blockNumber = undefined;
};

MsgPushDataTransferResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgPushDataTransferResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgPushDataTransferResponse.prototype.setChannelNumber = function setChannelNumber(value){
	this.channelNumber = value;
};

MsgPushDataTransferResponse.prototype.getChannelNumber = function getChannelNumber(){
	return this.channelNumber;
};

MsgPushDataTransferResponse.prototype.setDataSourceId = function setDataSourceId(value){
	this.dataSourceId = value;
};

MsgPushDataTransferResponse.prototype.getDataSourceId = function getDataSourceId(){
	return this.dataSourceId;
};

MsgPushDataTransferResponse.prototype.setStatus = function setStatus(value){
	this.status = value;
};

MsgPushDataTransferResponse.prototype.getStatus = function getStatus(){
	return this.status;
};

MsgPushDataTransferResponse.prototype.setBlockNumber = function setBlockNumber(value){
	this.blockNumber = value;
};

MsgPushDataTransferResponse.prototype.getBlockNumber = function getBlockNumber(){
	return this.blockNumber;
};

MsgPushDataTransferResponse.prototype.write = function write(buffer) {		
	buffer.writeUInt8(this.response);
	buffer.writeUInt32(this.channelNumber);
	buffer.writeUInt32(this.dataSourceId);
	buffer.writeUInt8(this.status);
	buffer.writeUInt8(this.blockNumber);
};

MsgPushDataTransferResponse.prototype.getSize = function getSize(){
	return 11;
};

MsgPushDataTransferResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	str+="Channel-Number: "+this.channelNumber.toString(16)+"\n";
	str+="Data-Source-ID: "+this.dataSourceId.toString(16)+"\n";
	str+="Status: "+this.status.toString(16)+"\n";
	str+="Block-Number: "+this.blockNumber.toString(16)+"\n";
	return str;
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