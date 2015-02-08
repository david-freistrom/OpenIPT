/**
 * New node file
 */
var validator = require('validator');

function MsgDeviceTimeResponse(){
	this.time = undefined;
};

MsgDeviceTimeResponse.prototype.setTime = function setTime(value){
	this.time = value;
};

MsgDeviceTimeResponse.prototype.getTime = function getTime(){
	return this.time;
};

MsgDeviceTimeResponse.prototype.write = function write(buffer) {			
	buffer.writeUInt32(this.time);
};

MsgDeviceTimeResponse.prototype.getSize = function getSize(){
	return 4;
};

MsgDeviceTimeResponse.prototype.toString = function toString(){
	var str = "";
	str+="Time: "+this.time.toString(16)+"\n";
	return str;
};

MsgDeviceTimeResponse.parse = function parse(buffer) {
	var message = new MsgDeviceTimeResponse();
	message.setTime(buffer.readUInt32());
	
	return message;
};

module.exports = MsgDeviceTimeResponse;