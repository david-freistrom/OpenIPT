/**
 * New node file
 */
var validator = require('validator');

var response;
var channelNumber;

function MsgPushChannelCloseResponse(){
	response = undefined;
	channelNumber = undefined;
};

MsgPushChannelCloseResponse.prototype.setResponse = function setResponse(value){
	
	if(!validator.isInt(value)){
		throw new Error("Response value not an integer!");
	}	
	if(value< 0x00 || value>0x03){
		throw new Error("Unknown Response value!");
	}
	response = value;
};

MsgPushChannelCloseResponse.prototype.getResponse = function getResponse(){
	return response;
};

MsgPushChannelCloseResponse.prototype.setChannelNumber = function setChannelNumber(value){
	if(!validator.isInt(value)){
		throw new Error("Channel-Number not an integer!");
	}	
	if(value<0){
		throw new Error("Channel-Number must be >= 0 !");
	}
	if(!validator.isByteLength(value, 1, 4)){
		throw new Error("Channel-Number out of range!");
	}
	channelNumber = value;
};

MsgPushChannelCloseResponse.prototype.getChannelNumber = function getChannelNumber(){
	return channelNumber;
};

MsgPushChannelCloseResponse.prototype.write = function write(buffer) {	
	console.log("Response: "+response.toString(16));
	console.log("Channel Number: "+channelNumber.toString(16));
	
	buffer.writeUInt8(response);
	buffer.writeUInt32(channelNumber);
};

MsgPushChannelCloseResponse.prototype.getSize = function getSize(){
	var size = 5;
	return size;
};

MsgPushChannelCloseResponse.parse = function parse(buffer) {
	var message = new MsgPushChannelCloseResponse();
	message.setResponse(buffer.readUInt8());
	message.setChannelNumber(buffer.readUInt32());
	
	return message;
};

module.exports = MsgPushChannelCloseResponse;