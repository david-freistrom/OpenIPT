/**
 * New node file
 */
var validator = require('validator');

var response;
var channelNumber;

function MsgPushTargetRegisterResponse(){
	
	this.setResponse = function setResponse(value){
		
		if(!validator.isInt(value)){
			throw new Error("Response is not an integer!");
		}	
		if(value< 0x00 || value>0x02){
			throw new Error("Response value not defined! Allowed values are 0x00, 0x01, 0x02. See documentation for details.");
		}
		
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.setChannelNumber = function setChannelNumber(value){
		if(!validator.isInt(value)){
			throw new Error("Channel Number is not an integer!");
		}	
		if(value<0){
			throw new Error("Channel Number must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 4)){
			throw new Error("Channel Number out of range!");
		}
		channelNumber = value;
	};
	
	this.getChannelNumber = function getChannelNumber(){
		return channelNumber;
	};
	
	this.write = function write(buffer) {	
		console.log("Response: "+response.toString(16));
		console.log("Channel Number: "+channelNumber.toString(16));
		
		buffer.writeUInt8(response);
		buffer.writeUInt32(channelNumber);
	};
	
	this.getSize = function getSize(){
		var size = 5;
		return size;
	};
};

MsgPushTargetRegisterResponse.parse = function parse(buffer) {
	var message = new MsgPushTargetRegisterResponse();
	message.setResponse(buffer.readUInt8());
	message.setChannelNumber(buffer.readUInt32());
	
	return message;
};

module.exports = MsgPushTargetRegisterResponse;