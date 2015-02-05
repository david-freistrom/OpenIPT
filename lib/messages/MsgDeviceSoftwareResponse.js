/**
 * New node file
 */
var validator = require('validator');

var version;

function MsgDeviceSoftwareResponse(){
	
	this.setVersion = function setVersion(value){
		if(!validator.isByteLength(value, 0, 19)){
			throw new Error("Version too long!");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Version not a string!");
		}
		version = value;
	};
	
	this.getVersion = function getVersion(){
		return version;
	};
	
	this.write = function write(buffer) {	
		console.log("Version: "+version);
		buffer.writeUInt8String(version);
	};
	

	this.getSize = function getSize(){
		var size = 0;
		size += version.length+1;
		return size;
	};
};

MsgDeviceSoftwareResponse.parse = function parse(buffer) {
	var message = new MsgDeviceSoftwareResponse();
	message.setVersion(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgDeviceSoftwareResponse;