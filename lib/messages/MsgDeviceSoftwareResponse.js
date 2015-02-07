/**
 * New node file
 */
var validator = require('validator');

var version;

function MsgDeviceSoftwareResponse(){
	version = undefined;
};

MsgDeviceSoftwareResponse.prototype.setVersion = function setVersion(value){
//	if(!validator.isByteLength(value, 0, 19)){
//		throw new Error("Version too long!");
//	}
//	if(!validator.isAlphanumeric(value)){
//		throw new Error("Version not a string!");
//	}
	version = value;
};

MsgDeviceSoftwareResponse.prototype.getVersion = function getVersion(){
	return version;
};

MsgDeviceSoftwareResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(version);
};

MsgDeviceSoftwareResponse.prototype.getSize = function getSize(){
	var size = 0;
	size += version.length+1;
	return size;
};

MsgDeviceSoftwareResponse.prototype.toString = function toString(){
	var str = "";
	str+="Version: "+version+"\n";
	return str;
};


MsgDeviceSoftwareResponse.parse = function parse(buffer) {
	var message = new MsgDeviceSoftwareResponse();
	message.setVersion(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgDeviceSoftwareResponse;