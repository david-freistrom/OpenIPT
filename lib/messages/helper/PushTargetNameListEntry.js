/**
 * New node file
 */
var validator = require('validator');

var targetName;
var account;
var address;
var version;
var deviceId;
var transferStatus;

function PushTargetNameListEntry(){
	targetName = undefined;
	account = undefined;
	address = undefined;
	version = undefined;
	deviceId = undefined;
	transferStatus = undefined;
};

PushTargetNameListEntry.prototype.setTargetName = function setTargetName(value){
	if(!validator.isByteLength(value, 1, 255)){
		throw new Error("Target-Name too long");
	}
	if(!validator.isAlphanumeric(value)){
		throw new Error("Target-Name not a string!");
	}
	targetName = value;
};

PushTargetNameListEntry.prototype.getTargetName = function getTargetName(){
	return targetName;
};

PushTargetNameListEntry.prototype.setAccount = function setAccount(value){
	if(!validator.isByteLength(value, 0, 62)){
		throw new Error("Account too long");
	}
	if(!validator.isAlphanumeric(value)){
		throw new Error("Account not a string!");
	}
	account = value;
};

PushTargetNameListEntry.prototype.getAccount = function getAccount(){
	return account;
};

PushTargetNameListEntry.prototype.setAddress = function setAddress(value){
	if(!validator.isIP(value)){
		throw new Error("Invalid Address format!");
	}	
	if(!validator.isByteLength(value, 0, 79)){
		throw new Error("Address too long!");
	}
	address = value;
};

PushTargetNameListEntry.prototype.getAddress = function getAddress(){
	return address;
};

PushTargetNameListEntry.prototype.setVersion = function setVersion(value){
	if(!validator.isByteLength(value, 0, 19)){
		throw new Error("Version too long");
	}
	if(!validator.isAlphanumeric(value)){
		throw new Error("Version not a string!");
	}
	version = value;
};

PushTargetNameListEntry.prototype.getVersion = function getVersion(){
	return version;
};

PushTargetNameListEntry.prototype.setDeviceId = function setDeviceId(value){
	if(!validator.isByteLength(value, 0, 16)){
		throw new Error("Device-ID too long");
	}
	if(!validator.isAlphanumeric(value)){
		throw new Error("Device-ID not a string!");
	}
	deviceId = value;
};

PushTargetNameListEntry.prototype.getDeviceId = function getDeviceId(){
	return deviceId;
};

PushTargetNameListEntry.prototype.setTransferStatus = function settransferStatus(value){
	if(!validator.isInt(value)){
		throw new Error("Transfer-Status not an integer!");
	}	
	if(value<0){
		throw new Error("Transfer-Status must be >= 0 !");
	}
	transferStatus = value;
};

PushTargetNameListEntry.prototype.getTransferStatus = function getTransferStatus(){
	return transferStatus;
};

PushTargetNameListEntry.prototype.write = function write(buffer) {	
	console.log("Target Name: "+targetName);
	console.log("Account: "+account);
	console.log("Address: "+address);
	console.log("Version: "+version);
	console.log("Device ID: "+deviceId);
	console.log("Transfer Status: "+transferStatus.toString(16));
	
	buffer.writeUInt8String(targetName);
	buffer.writeUInt8String(account);
	buffer.writeUInt8String(address);
	buffer.writeUInt8String(version);
	buffer.writeUInt8String(deviceId);
	buffer.writeUInt8(transferStatus);
};

PushTargetNameListEntry.prototype.getSize = function getSize(){
	var size = 1;
	size += targetName.length+1;
	size += account.length+1;
	size += address.length+1;
	size += version.length+1;
	size += deviceId.length+1;
	
	return size;
};

PushTargetNameListEntry.parse = function parse(buffer) {
	var message = new PushTargetNameListEntry();
	message.setTargetName(buffer.readUInt8String());
	message.setAccount(buffer.readUInt8String());
	message.setAddress(buffer.readUInt8String());
	message.setVersion(buffer.readUInt8String());
	message.setDeviceId(buffer.readUInt8String());
	message.setTransferStatus(buffer.readUInt8());
	
	return message;
};

module.exports = PushTargetNameListEntry;