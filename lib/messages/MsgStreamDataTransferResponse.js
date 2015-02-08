/**
 * New node file
 */
var validator = require('validator');

function MsgStreamDataTransferResponse(){
	this.response = undefined;
	this.streamNumber = undefined;
	this.status = undefined;
	this.blockNumber = undefined;
};


MsgStreamDataTransferResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgStreamDataTransferResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgStreamDataTransferResponse.prototype.setStreamNumber = function setStreamNumber(value){
	this.streamNumber = value;
};

MsgStreamDataTransferResponse.prototype.getStreamNumber = function getStreamNumber(){
	return this.streamNumber;
};

MsgStreamDataTransferResponse.prototype.setBlockNumber = function setBlockNumber(value){
	this.blockNumber = value;
};

MsgStreamDataTransferResponse.prototype.getBlockNumber = function getBlockNumber(){
	return this.blockNumber;
};

MsgStreamDataTransferResponse.prototype.setStatus = function setStatus(value){
	this.status = value;
};

MsgStreamDataTransferResponse.prototype.getStatus = function getStatus(){
	return this.status;
};

MsgStreamDataTransferResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8(this.response);
	buffer.writeUInt32(this.streamNumber);
	buffer.writeUInt8(this.status);
	buffer.writeUInt8(this.blockNumber);
};

MsgStreamDataTransferResponse.prototype.getSize = function getSize(){
	return 7;
};

MsgStreamDataTransferResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response+"\n";
	str+="Stream-Number: "+this.streamNumber.toString(16)+"\n";
	str+="Status: "+this.status.toString(16)+"\n";
	str+="Block-Number: "+this.blockNumber.toString(16)+"\n";
	return str;
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