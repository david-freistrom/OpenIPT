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
	
	this.write = function write(buffer) {	
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
	
	
	this.getSize = function getSize(){
		var size = 0;
		size += targetName.length+1;
		size += account.length+1;
		size += address.length+1;
		size += version.length+1;
		size += deviceId.length+1;
		
		return size;
	};
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