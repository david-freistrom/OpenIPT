/**
 * New node file
 */
function PushTargetNameReq(){
	this.targetName = undefined;
	this.account = undefined;
	this.address = undefined;
	this.version = undefined;
	this.deviceId = undefined;
};

PushTargetNameReq.prototype.setTargetName = function setTargetName(value){
	this.targetName = value;
};

PushTargetNameReq.prototype.getTargetName = function getTargetName(){
	return this.targetName;
};


PushTargetNameReq.prototype.setAccount = function setAccount(value){
	this.account = value;
};

PushTargetNameReq.prototype.getAccount = function getAccount(){
	return this.account;
};


PushTargetNameReq.prototype.setAddress = function setAddress(value){
	this.address = value;
};

PushTargetNameReq.prototype.getAddress = function getAddress(){
	return this.address;
};

PushTargetNameReq.prototype.setVersion = function setVersion(value){
	this.version = value;
};

PushTargetNameReq.prototype.getVersion = function getVersion(){
	return this.version;
};

PushTargetNameReq.prototype.setDeviceId = function setDeviceId(value){
	this.deviceId = value;
};

PushTargetNameReq.prototype.getDeviceId = function getDeviceId(){
	return this.deviceId;
};

PushTargetNameReq.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(this.targetName);
	buffer.writeUInt8String(this.account);
	buffer.writeUInt8String(this.address);
	buffer.writeUInt8String(this.version);
	buffer.writeUInt8String(this.deviceId);
};

PushTargetNameReq.prototype.getSize = function getSize(){
	var size = 0;
	size += this.targetName.length+1;
	size += this.account.length+1;
	size += this.address.length+1;
	size += this.version.length+1;
	size += this.deviceId.length+1;
	
	return size;
};

PushTargetNameReq.prototype.toString = function toString(){
	var str = "";
	str+="Target-Name: "+this.targetName+"\n";
	str+="Account: "+this.account+"\n";
	str+="Address: "+this.address+"\n";
	str+="Version: "+this.version+"\n";
	str+="Device-ID: "+this.deviceId+"\n";
	return str;
};

PushTargetNameReq.parse = function parse(buffer) {
	var message = new PushTargetNameReq();
	message.setTargetName(buffer.readUInt8String());
	message.setAccount(buffer.readUInt8String());
	message.setAddress(buffer.readUInt8String());
	message.setVersion(buffer.readUInt8String());
	message.setDeviceId(buffer.readUInt8String());
	
	return message;
};

module.exports = PushTargetNameReq;