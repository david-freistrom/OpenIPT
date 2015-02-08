/**
 * New node file
 */
var validator = require('validator');

function MsgDeviceIdentifierResponse(){
	this.deviceId = undefined;
};

MsgDeviceIdentifierResponse.prototype.setDeviceId = function setDeviceId(value){
	this.deviceId = value;
};

MsgDeviceIdentifierResponse.prototype.getDeviceId = function getDeviceId(){
	return this.deviceId;
};

MsgDeviceIdentifierResponse.prototype.write = function write(buffer) {		
	buffer.writeUInt8String(this.deviceId);
};

MsgDeviceIdentifierResponse.prototype.getSize = function getSize(){
	return  this.deviceId.length+1;
};

MsgDeviceIdentifierResponse.prototype.toString = function toString(){
	var str = "";
	str+="Device-ID: "+this.deviceId+"\n";
	return str;
};

MsgDeviceIdentifierResponse.parse = function parse(buffer) {
	var message = new MsgDeviceIdentifierResponse();
	message.setDeviceId(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgDeviceIdentifierResponse;