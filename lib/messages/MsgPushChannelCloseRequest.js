/**
 * New node file
 */
var validator = require('validator');

var channelNumber;

function MsgPushChannelCloseRequest(){
	
	this.setChannelNumber = function setChannelNumber(value){
		if(!validator.isInt(value)){
			throw new Error("Channel Number is not an integer!");
		}	
		if(value<0){
			throw new Error("Channel Number must be >= 0 !");
		}
		if(!validator.isByteLength(value, 0, 4)){
			throw new Error("Channel Number out of range!");
		}
		channelNumber = value;
	};
	
	this.getChannelNumber = function getChannelNumber(){
		return channelNumber;
	};
	
	this.write = function write(buffer) {
		console.log("Channel Number: "+channelNumber.toString(16));
		buffer.writeUInt32(channelNumber);
	};
	
	this.getSize = function getSize(){
		var size = 4;
		return size;
	};
};

MsgPushChannelCloseRequest.parse = function parse(buffer) {
	var message = new MsgPushChannelCloseRequest();
	message.setChannelNumber(buffer.readUInt32());
	
	return message;
};


module.exports = MsgPushChannelCloseRequest;