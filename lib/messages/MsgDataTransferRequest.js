/**
 * New node file
 */
var validator = require('validator');

var dataBlock;

function MsgDataTransferRequest(){
	
	this.setDataBlock = function setDataBlock(value){
		if(!validator.isByteLength(value, 1, 1024)){
			throw new Error("DataBlock is out of range!");
		}
		dataBlock = value;
	};
	
	this.getDataBlock = function getDataBlock(){
		return dataBlock;
	};
		
	this.write = function write(buffer) {	
		buffer.writeUInt8VarArray(dataBlock);
	};
	
	this.getSize = function getSize(){
		var size = 0;
		size += dataBlock.length+1;
		return size;
	};
};

MsgDataTransferRequest.parse = function parse(buffer) {
	var message = new MsgDataTransferRequest();
	message.setDataBlock(buffer.readUInt8VarArray());
	
	return message;
};

module.exports = MsgDataTransferRequest;