/**
 * New node file
 */

var response;
var streamNumber;
var status;
var blockNumber;

function MsgStreamDataTransferResponse(){
	
	this.setResponse = function setResponse(value){
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.setStreamNumber = function setStreamNumber(value){
		streamNumber = value;
	};
	
	this.getStreamNumber = function getStreamNumber(){
		return streamNumber;
	};
	
	this.setBlockNumber = function setBlockNumber(value){
		blockNumber = value;
	};
	
	this.getBlockNumber = function getBlockNumber(){
		return blockNumber;
	};
	
	this.setStatus = function setStatus(value){
		status = value;
	};
	
	this.getStatus = function getStatus(){
		return status;
	};
	
	this.write = function write(buffer) {	
		console.log("Response: "+response.toString(16));
		console.log("Stream Number: "+streamNumber.toString(16));
		console.log("Status: "+status.toString(16));
		console.log("Block Number: "+blockNumber.toString(16));
		
		buffer.writeUInt8(response);
		buffer.writeUInt32(streamNumber);
		buffer.writeUInt8(status);
		buffer.writeUInt8(blockNumber);
	};
	
	this.getSize = function getSize(){
		var size = 7;
		return size;
	};
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