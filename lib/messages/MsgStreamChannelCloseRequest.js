/**
 * New node file
 */
var validator = require('validator');

var streamNumber;

function MsgStreamChannelCloseRequest(){
	streamNumber = undefined;
};


MsgStreamChannelCloseRequest.prototype.setStreamNumber = function setStreamNumber(value){
//	if(!validator.isInt(value)){
//		throw new Error("Stream-Number not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Stream-Number must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 4)){
//		throw new Error("Stream-Number out of range!");
//	}
	streamNumber = value;
};

MsgStreamChannelCloseRequest.prototype.getStreamNumber = function getStreamNumber(){
	return streamNumber;
};

MsgStreamChannelCloseRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt32(streamNumber);
};

MsgStreamChannelCloseRequest.prototype.getSize = function getSize(){
	var size = 4;
	return size;
};

MsgStreamChannelCloseRequest.prototype.toString = function toString(){
	var str = "";
	str+="Stream-Number: "+streamNumber.toString(16)+"\n";
	return str;
};

MsgStreamChannelCloseRequest.parse = function parse(buffer) {
	var message = new MsgStreamChannelCloseRequest();
	message.setStreamNumber(buffer.readUInt32());
	
	return message;
};

module.exports = MsgStreamChannelCloseRequest;