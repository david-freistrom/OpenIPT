/**
 * New node file
 */
var validator = require('validator');
var Constants = require('../Constants');

function MsgPublicLoginRequest(){
	this.account = undefined;
	this.password = undefined;
};

MsgPublicLoginRequest.prototype.setAccount = function setAccount(value){
	this.account = value;
};

MsgPublicLoginRequest.prototype.getAccount = function getAccount(){
	return this.account;
};

MsgPublicLoginRequest.prototype.setPassword = function setPassword(value){
	this.password = value;
}; 

MsgPublicLoginRequest.prototype.getPassword = function getPassword(){
	return this.password;
}; 

MsgPublicLoginRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(this.account);
	buffer.writeUInt8String(this.password);
}; 

MsgPublicLoginRequest.prototype.getSize = function getSize(){
	var size = 0;
	size += this.account.length+1;
	size += this.password.length+1;
	return size;
}; 

MsgPublicLoginRequest.prototype.toString = function toString(){
	var str = "";
	str+="Account: "+this.account+"\n";
	str+="Password: "+this.password+"\n";
	return str;
};

MsgPublicLoginRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.PUBLIC_LOGIN_RESPONSE;
};

MsgPublicLoginRequest.parse = function parse(buffer) {
	var message = new MsgPublicLoginRequest();
	message.setAccount(buffer.readUInt8String());
	message.setPassword(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgPublicLoginRequest;