/**
 * New node file
 */

function PushTargetNameListEntry(){
	this.targetName = undefined;
	this.account = undefined;
	this.address = undefined;
	this.version = undefined;
	this.deviceId = undefined;
	this.transferStatus = undefined;
};

PushTargetNameListEntry.prototype.setTargetName = function setTargetName(value){
	this.targetName = value;
};

PushTargetNameListEntry.prototype.getTargetName = function getTargetName(){
	return targetName;
};

PushTargetNameListEntry.prototype.setAccount = function setAccount(value){
	this.account = value;
};

PushTargetNameListEntry.prototype.getAccount = function getAccount(){
	return this.account;
};

PushTargetNameListEntry.prototype.setAddress = function setAddress(value){
	this.address = value;
};

PushTargetNameListEntry.prototype.getAddress = function getAddress(){
	return this.address;
};

PushTargetNameListEntry.prototype.setVersion = function setVersion(value){
	this.version = value;
};

PushTargetNameListEntry.prototype.getVersion = function getVersion(){
	return this.version;
};

PushTargetNameListEntry.prototype.setDeviceId = function setDeviceId(value){
	this.deviceId = value;
};

PushTargetNameListEntry.prototype.getDeviceId = function getDeviceId(){
	return this.deviceId;
};

PushTargetNameListEntry.prototype.setTransferStatus = function settransferStatus(value){
	this.transferStatus = value;
};

PushTargetNameListEntry.prototype.getTransferStatus = function getTransferStatus(){
	return this.transferStatus;
};

PushTargetNameListEntry.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(this.targetName);
	buffer.writeUInt8String(this.account);
	buffer.writeUInt8String(this.address);
	buffer.writeUInt8String(this.version);
	buffer.writeUInt8String(this.deviceId);
	buffer.writeUInt8(this.transferStatus);
};

PushTargetNameListEntry.prototype.getSize = function getSize(){
	var size = 1;
	size += this.targetName.length+1;
	size += this.account.length+1;
	size += this.address.length+1;
	size += this.version.length+1;
	size += this.deviceId.length+1;
	
	return size;
};

PushTargetNameListEntry.prototype.toString = function toString(){
	var str = "";
	str+="Target-Name: "+this.targetName+"\n";
	str+="Account: "+this.account+"\n";
	str+="Address: "+this.address+"\n";
	str+="Version: "+this.version+"\n";
	str+="Device-ID: "+this.deviceId+"\n";
	str+="Transfer-Status: "+this.transferStatus.toString(16)+"\n";
	return str;
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