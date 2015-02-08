/**
 * New node file
 */
var validator = require('validator');

function MsgDeviceAuthenticationResponse(){
	this.account = undefined;
	this.password = undefined;
	this.address = undefined;
	this.description = undefined;
};

MsgDeviceAuthenticationResponse.prototype.setAccount = function setAccount(value){
	this.account = value;
};

MsgDeviceAuthenticationResponse.prototype.getAccount = function getAccount(){
	return this.account;
};

MsgDeviceAuthenticationResponse.prototype.setPassword = function setPassword(value){
	this.password = value;
};

MsgDeviceAuthenticationResponse.prototype.getPassword = function getPassword(){
	return this.password;
};

MsgDeviceAuthenticationResponse.prototype.setAddress = function setAddress(value){
	this.address = value;
};

MsgDeviceAuthenticationResponse.prototype.getAddress = function getAddress(){
	return this.address;
};

MsgDeviceAuthenticationResponse.prototype.setDescription = function setDescription(value){
	this.description = value;
};

MsgDeviceAuthenticationResponse.prototype.getDescription = function getDescription(){
	return this.description;
};

MsgDeviceAuthenticationResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(this.account);
	buffer.writeUInt8String(this.password);
	buffer.writeUInt8String(this.address);
	buffer.writeUInt8String(this.description);
};

MsgDeviceAuthenticationResponse.prototype.getSize = function getSize(){
	var size = 0;
	size += this.account.length+1;
	size += this.password.length+1;
	size += this.address.length+1;
	size += this.description.length+1;
	
	return size;
};

MsgDeviceAuthenticationResponse.prototype.toString = function toString(){
	var str = "";
	str+="Account: "+this.account+"\n";
	str+="Password: "+this.password+"\n";
	str+="Address: "+this.address+"\n";
	str+="Description: "+this.description+"\n";
	
	return str;
};

MsgDeviceAuthenticationResponse.parse = function parse(buffer) {
	var message = new MsgDeviceAuthenticationResponse();
	message.setAccount(buffer.readUInt8String());
	message.setPassword(buffer.readUInt8String());
	message.setAddress(buffer.readUInt8String());
	message.setDescription(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgDeviceAuthenticationResponse;