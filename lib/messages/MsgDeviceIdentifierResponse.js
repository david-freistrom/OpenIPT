/**
 * New node file
 */

var deviceId;

function MsgDeviceIdentifierResponse(){
	
	this.setDeviceId = function setDeviceId(value){
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
		size += deviceId.length;
		return size;
	};
};

MsgDeviceIdentifierResponse.parse = function parse(buffer) {
	var message = new MsgDeviceIdentifierResponse();
	message.setDeviceId(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgDeviceIdentifierResponse;