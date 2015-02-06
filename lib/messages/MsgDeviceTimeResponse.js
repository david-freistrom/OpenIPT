/**
 * New node file
 */
var validator = require('validator');

var time;

function MsgDeviceTimeResponse(){
	time = undefined;
};

MsgDeviceTimeResponse.prototype.setTime = function setTime(value){
	if(!validator.isInt(value)){
		throw new Error("Time not an integer!");
	}	
	if(value<0){
		throw new Error("Time must be >= 0 !");
	}
	if(!validator.isByteLength(value, 1, 4)){
		throw new Error("Time out of range!");
	}
	
	time = value;
};

MsgDeviceTimeResponse.prototype.getTime = function getTime(){
	return time;
};

MsgDeviceTimeResponse.prototype.write = function write(buffer) {			
	console.log("Time: "+time.toString(16));
	buffer.writeUInt32(time);
};

MsgDeviceTimeResponse.prototype.getSize = function getSize(){
	var size = 4;
	return size;
};


MsgDeviceTimeResponse.parse = function parse(buffer) {
	var message = new MsgDeviceTimeResponse();
	message.setTime(buffer.readUInt32());
	
	return message;
};

module.exports = MsgDeviceTimeResponse;