/**
 * New node file
 */
var validator = require('validator');

var targetName;
var account;
var address;
var version;
var deviceId;

function PushTargetNameListFilter(){
	targetName = undefined;
	account = undefined;
	address = undefined;
	version = undefined;
	deviceId = undefined;
};


PushTargetNameListFilter.prototype.setTargetName = function setTargetName(value){
	if(!validator.isByteLength(value, 0, 255)){
		throw new Error("Target-Name too long");
	}
	if(!validator.isAlphanumeric(value)){
		throw new Error("Target-Name not a string!");
	}
	targetName = value;
};

PushTargetNameListFilter.prototype.getTargetName = function getTargetName(){
	return targetName;
};

PushTargetNameListFilter.prototype.setAccount = function setAccount(value){
	if(!validator.isByteLength(value, 0, 62)){
		throw new Error("Account too long");
	}
	if(!validator.isAlphanumeric(value)){
		throw new Error("Account not a string!");
	}
	account = value;
};

PushTargetNameListFilter.prototype.getAccount = function getAccount(){
	return account;
};

PushTargetNameListFilter.prototype.setAddress = function setAddress(value){
	if(!validator.isIP(value)){
		throw new Error("Invalid Address format!");
	}	
	if(!validator.isByteLength(value, 0, 79)){
		throw new Error("Address too long!");
	}
	address = value;
};

PushTargetNameListFilter.prototype.getAddress = function getAddress(){
	return address;
};

PushTargetNameListFilter.prototype.setVersion = function setVersion(value){
	if(!validator.isByteLength(value, 0, 19)){
		throw new Error("Version too long");
	}
	if(!validator.isAlphanumeric(value)){
		throw new Error("Version not a string!");
	}
	version = value;
};

PushTargetNameListFilter.prototype.getVersion = function getVersion(){
	return version;
};

PushTargetNameListFilter.prototype.setDeviceId = function setDeviceId(value){
	if(!validator.isByteLength(value, 0, 19)){
		throw new Error("Device-ID too long");
	}
	if(!validator.isAlphanumeric(value)){
		throw new Error("Device-ID not a string!");
	}
	deviceId = value;
};

PushTargetNameListFilter.prototype.getDeviceId = function getDeviceId(){
	return deviceId;
};

PushTargetNameListFilter.prototype.write = function write(buffer) {	
	console.log("Target Name: "+targetName);
	console.log("Account: "+account);
	console.log("Address: "+address);
	console.log("Version: "+version);
	console.log("Device ID: "+deviceId);
	
	buffer.writeUInt8String(targetName);
	buffer.writeUInt8String(account);
	buffer.writeUInt8String(address);
	buffer.writeUInt8String(version);
	buffer.writeUInt8String(deviceId);
};


PushTargetNameListFilter.prototype.getSize = function getSize(){
	var size = 0;
	size += targetName.length+1;
	size += account.length+1;
	size += address.length+1;
	size += version.length+1;
	size += deviceId.length+1;
	
	return size;
};

PushTargetNameListFilter.parse = function parse(buffer) {
	var message = new PushTargetNameListFilter();
	message.setTargetName(buffer.readUInt8String());
	message.setAccount(buffer.readUInt8String());
	message.setAddress(buffer.readUInt8String());
	message.setVersion(buffer.readUInt8String());
	message.setDeviceId(buffer.readUInt8String());
	
	return message;
};

module.exports = PushTargetNameListFilter;