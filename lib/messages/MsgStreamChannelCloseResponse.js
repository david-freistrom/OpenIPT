/**
 * New node file
 */
var validator = require('validator');

var response;
var streamNumber;

function MsgStreamChannelCloseResponse(){
	response = undefined;
	streamNumber = undefined;
};

MsgStreamChannelCloseResponse.prorotype.setResponse = function setResponse(value){
	
	if(!validator.isInt(value)){
		throw new Error("Response value not an integer!");
	}	
	if(value< 0x00 || value>0x02){
		throw new Error("Unknown Response value!");
	}
	
	response = value;
};

MsgStreamChannelCloseResponse.prorotype.getResponse = function getResponse(){
	return response;
};

MsgStreamChannelCloseResponse.prorotype.setStreamNumber = function setStreamNumber(value){
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

MsgStreamChannelCloseResponse.prorotype.getStreamNumber = function getStreamNumber(){
	return streamNumber;
};

MsgStreamChannelCloseResponse.prorotype.write = function write(buffer) {	
	console.log("Response: "+response.toString(16));
	console.log("Stream Number: "+streamNumber.toString(16));
	
	buffer.writeUInt8(response);
	buffer.writeUInt32(streamNumber);
};

MsgStreamChannelCloseResponse.prorotype.getSize = function getSize(){
	var size = 5;
	return size;
};

MsgStreamChannelCloseResponse.parse = function parse(buffer) {
	var message = new MsgStreamChannelCloseResponse();
	message.setResponser(buffer.readUInt8());
	message.setStreamNumber(buffer.readUInt32());
	
	return message;
};
module.exports = MsgStreamChannelCloseResponse;