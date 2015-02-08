/**
 * New node file
 */
var validator = require('validator');
var Constants = require('../Constants');

function MsgDataTransferRequest(){
	this.dataBlock = undefined;
};

MsgDataTransferRequest.prototype.setDataBlock = function setDataBlock(value){
	this.dataBlock = value;
};

MsgDataTransferRequest.prototype.getDataBlock = function getDataBlock(){
	return this.dataBlock;
};

MsgDataTransferRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt8VarArray(this.dataBlock);
};

MsgDataTransferRequest.prototype.getSize = function getSize(){
	return this.dataBlock.length+1;
};

MsgDataTransferRequest.prototype.toString = function toString(){
	var str = "";
	str+="Data-Block: "+this.dataBlock+"\n";
	return str;
};

MsgDataTransferRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.DATA_TRANSFER_RESPONSE;
};

MsgDataTransferRequest.parse = function parse(buffer) {
	var message = new MsgDataTransferRequest();
	message.setDataBlock(buffer.readUInt8VarArray());
	
	return message;
};

module.exports = MsgDataTransferRequest;