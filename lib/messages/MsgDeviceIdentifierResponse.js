/**
 * New node file
 */
var validator = require('validator');

var deviceId;

function MsgDeviceIdentifierResponse(){
	deviceId = undefined;
};

MsgDeviceIdentifierResponse.prototype.setDeviceId = function setDeviceId(value){
//	if(!validator.isByteLength(value, 0, 19)){
//		throw new Error("Device ID too long");
//	}
//	if(!validator.isAlphanumeric(value)){
//		throw new Error("Device ID not a string!");
//	}
	deviceId = value;
};

MsgDeviceIdentifierResponse.prototype.getDeviceId = function getDeviceId(){
	return deviceId;
};

MsgDeviceIdentifierResponse.prototype.write = function write(buffer) {		
	buffer.writeUInt8String(deviceId);
};

MsgDeviceIdentifierResponse.prototype.getSize = function getSize(){
	var size = 0;
	size += deviceId.length+1;
	return size;
};

MsgDeviceIdentifierResponse.prototype.toString = function toString(){
	var str = "";
	str+="Device-ID: "+deviceId+"\n";
	return str;
};


MsgDeviceIdentifierResponse.parse = function parse(buffer) {
	var message = new MsgDeviceIdentifierResponse();
	message.setDeviceId(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgDeviceIdentifierResponse;