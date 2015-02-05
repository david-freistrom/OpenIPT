/**
 * New node file
 */
var validator = require('validator');

var streamNumber;

function MsgStreamChannelCloseRequest(){

	this.setStreamNumber = function setStreamNumber(value){
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
	
	this.getStreamNumber = function getStreamNumber(){
		return streamNumber;
	};
	
	this.write = function write(buffer) {	
		console.log("Stream Number: "+streamNumber.toString(16));
		buffer.writeUInt32(streamNumber);
	};
	
	this.getSize = function getSize(){
		var size = 4;
		return size;
	};
};

MsgStreamChannelCloseRequest.parse = function parse(buffer) {
	var message = new MsgStreamChannelCloseRequest();
	message.setStreamNumber(buffer.readUInt32());
	
	return message;
};

module.exports = MsgStreamChannelCloseRequest;