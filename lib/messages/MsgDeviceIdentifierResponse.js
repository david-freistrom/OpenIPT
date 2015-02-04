/**
 * New node file
 */
var validator = require('validator');

var deviceId;

function MsgDeviceIdentifierResponse(){
	
	this.setDeviceId = function setDeviceId(value){
		if(!validator.isByteLength(value, 0, 19)){
			throw new Error("Device ID is to long! Max length: 19");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Device ID is not a string!");
		}
		deviceId = value;
	};
	
	this.getDeviceId = function getDeviceId(){
		return deviceId;
	};
	
	this.write = function write(buffer) {		
		console.log("DeviceId: "+deviceId);
		buffer.writeUInt8String(deviceId);
	};
	
	this.getSize = function getSize(){
		var size = 0;
		size += deviceId.length+1;
		return size;
	};
};

MsgDeviceIdentifierResponse.parse = function parse(buffer) {
	var message = new MsgDeviceIdentifierResponse();
	message.setDeviceId(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgDeviceIdentifierResponse;