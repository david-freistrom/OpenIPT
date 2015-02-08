/**
 * New node file
 */
var validator = require('validator');

var version;

function MsgDeviceSoftwareResponse(){
	this.version = undefined;
};

MsgDeviceSoftwareResponse.prototype.setVersion = function setVersion(value){
	this.version = value;
};

MsgDeviceSoftwareResponse.prototype.getVersion = function getVersion(){
	return this.version;
};

MsgDeviceSoftwareResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(this.version);
};

MsgDeviceSoftwareResponse.prototype.getSize = function getSize(){
	return this.version.length+1;
};

MsgDeviceSoftwareResponse.prototype.toString = function toString(){
	var str = "";
	str+="Version: "+this.version+"\n";
	return str;
};

MsgDeviceSoftwareResponse.parse = function parse(buffer) {
	var message = new MsgDeviceSoftwareResponse();
	message.setVersion(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgDeviceSoftwareResponse;