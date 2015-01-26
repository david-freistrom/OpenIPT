/**
 * New node file
 */

var targetName;
var account;
var address;
var version;
var deviceId;
var transferStatus;

function PushTargetNameListEntry(){
	
	this.setTargetName = function setTargetName(value){
		targetName = value;
	};
	
	this.getTargetName = function getTargetName(){
		return targetName;
	};
	
	this.setAccount = function setAccount(value){
		account = value;
	};
	
	this.getAccount = function getAccount(){
		return account;
	};
	
	this.setAddress = function setAddress(value){
		address = value;
	};
	
	this.getAddress = function getAddress(){
		return address;
	};
	
	this.setVersion = function setVersion(value){
		version = value;
	};
	
	this.getVersion = function getVersion(){
		return version;
	};
	
	this.setDeviceId = function setDeviceId(value){
		deviceId = value;
	};
	
	this.getDeviceId = function getDeviceId(){
		return deviceId;
	};
	
	this.setTransferStatus = function settransferStatus(value){
		transferStatus = value;
	};
	
	this.getTransferStatus = function getTransferStatus(){
		return transferStatus;
	};
	
	this.write = function write(buffer) {	
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
	
	this.getSize = function getSize(){
		var size = 1;
		size += targetName.length;
		size += account.length;
		size += address.length;
		size += version.length;
		size += deviceId.length;
		
		return size;
	};
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