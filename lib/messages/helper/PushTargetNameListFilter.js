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
	this.targetName = undefined;
	this.account = undefined;
	this.address = undefined;
	this.version = undefined;
	this.deviceId = undefined;
};

PushTargetNameListFilter.prototype.setTargetName = function setTargetName(value){
	this.targetName = value;
};

PushTargetNameListFilter.prototype.getTargetName = function getTargetName(){
	return this.targetName;
};

PushTargetNameListFilter.prototype.setAccount = function setAccount(value){
	this.account = value;
};

PushTargetNameListFilter.prototype.getAccount = function getAccount(){
	return this.account;
};

PushTargetNameListFilter.prototype.setAddress = function setAddress(value){
	this.address = value;
};

PushTargetNameListFilter.prototype.getAddress = function getAddress(){
	return this.address;
};

PushTargetNameListFilter.prototype.setVersion = function setVersion(value){
	this.version = value;
};

PushTargetNameListFilter.prototype.getVersion = function getVersion(){
	return this.version;
};

PushTargetNameListFilter.prototype.setDeviceId = function setDeviceId(value){
	this.deviceId = value;
};

PushTargetNameListFilter.prototype.getDeviceId = function getDeviceId(){
	return this.deviceId;
};

PushTargetNameListFilter.prototype.write = function write(buffer) {		
	buffer.writeUInt8String(this.targetName);
	buffer.writeUInt8String(this.account);
	buffer.writeUInt8String(this.address);
	buffer.writeUInt8String(this.version);
	buffer.writeUInt8String(this.deviceId);
};


PushTargetNameListFilter.prototype.getSize = function getSize(){
	var size = 0;
	size += this.targetName.length+1;
	size += this.account.length+1;
	size += this.address.length+1;
	size += this.version.length+1;
	size += this.deviceId.length+1;
	
	return size;
};

PushTargetNameListFilter.prototype.toString = function toString(){
	var str = "";
	str+="Target-Name: "+this.targetName+"\n";
	str+="Account: "+this.account+"\n";
	str+="Address: "+this.address+"\n";
	str+="Version: "+this.version+"\n";
	str+="Device-ID: "+this.deviceId+"\n";
	return str;
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