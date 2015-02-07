/**
 * New node file
 */
var validator = require('validator');

var channelNumber;

function MsgPushChannelCloseRequest(){
	channelNumber = undefined;
};

MsgPushChannelCloseRequest.prototype.setChannelNumber = function setChannelNumber(value){
//	if(!validator.isInt(value)){
//		throw new Error("Channel-Number not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Channel-Number must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 4)){
//		throw new Error("Channel-Number out of range!");
//	}
	channelNumber = value;
};

MsgPushChannelCloseRequest.prototype.getChannelNumber = function getChannelNumber(){
	return channelNumber;
};

MsgPushChannelCloseRequest.prototype.write = function write(buffer) {
	buffer.writeUInt32(channelNumber);
};

MsgPushChannelCloseRequest.prototype.getSize = function getSize(){
	var size = 4;
	return size;
};

MsgPushChannelCloseRequest.prototype.toString = function toString(){
	var str = "";
	str+="Channel-Number: "+channelNumber.toString(16)+"\n";
	return str;
};


MsgPushChannelCloseRequest.parse = function parse(buffer) {
	var message = new MsgPushChannelCloseRequest();
	message.setChannelNumber(buffer.readUInt32());
	
	return message;
};


module.exports = MsgPushChannelCloseRequest;