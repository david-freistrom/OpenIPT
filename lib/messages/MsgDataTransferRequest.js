/**
 * New node file
 */
var validator = require('validator');

var dataBlock;

function MsgDataTransferRequest(){
	dataBlock = undefined;
};

MsgDataTransferRequest.prototype.setDataBlock = function setDataBlock(value){
//	if(!validator.isByteLength(value, 1, 1024)){
//		throw new Error("Data-Block value out of range!");
//	}
	dataBlock = value;
};

MsgDataTransferRequest.prototype.getDataBlock = function getDataBlock(){
	return dataBlock;
};

MsgDataTransferRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt8VarArray(dataBlock);
};

MsgDataTransferRequest.prototype.getSize = function getSize(){
	var size = 0;
	size += dataBlock.length+1;
	return size;
};

MsgDataTransferRequest.prototype.toString = function toString(){
	var str = "";
	str+="Data-Block: "+dataBlock+"\n";
	return str;
};

MsgDataTransferRequest.parse = function parse(buffer) {
	var message = new MsgDataTransferRequest();
	message.setDataBlock(buffer.readUInt8VarArray());
	
	return message;
};

module.exports = MsgDataTransferRequest;