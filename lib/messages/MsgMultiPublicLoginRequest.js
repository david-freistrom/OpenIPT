/**
 * New node file
 */
var validator = require('validator');
var Constants = require('../Constants');

function MsgMultiPublicLoginRequest(){
	this.account = undefined;
	this.password = undefined;
	this.countRequested = undefined;
};

MsgMultiPublicLoginRequest.prototype.setAccount = function setAccount(value){
	this.account = value;
};

MsgMultiPublicLoginRequest.prototype.getAccount = function getAccount(){
	return this.account;
};

MsgMultiPublicLoginRequest.prototype.setPassword = function setPassword(value){
	this.password = value;
};

MsgMultiPublicLoginRequest.prototype.getPassword = function getPassword(){
	return this.password;
};

MsgMultiPublicLoginRequest.prototype.setCountRequested = function setCountRequested(value){
	this.countRequested = value;
};

MsgMultiPublicLoginRequest.prototype.getCountRequested = function getCountRequested(){
	return this.countRequested;
};

MsgMultiPublicLoginRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(this.account);
	buffer.writeUInt8String(this.password);
	buffer.writeUInt16(this.countRequested);
};

MsgMultiPublicLoginRequest.prototype.getSize = function getSize(){
	var size = 2;
	size += this.account.length+1;
	size += this.password.length+1;
	
	return size;
};

MsgMultiPublicLoginRequest.prototype.toString = function toString(){
	var str = "";
	str+="Account: "+this.account+"\n";
	str+="Password: "+this.password+"\n";
	str+="Count Requested: "+this.countRequested.toString(16)+"\n";
	return str;
};

MsgMultiPublicLoginRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.MULTI_PUBLIC_LOGIN_RESPONSE;
};

MsgMultiPublicLoginRequest.parse = function parse(buffer) {
	var message = new MsgMultiPublicLoginRequest();
	message.setAccount(buffer.readUInt8String());
	message.setPassword(buffer.readUInt8String());
	message.setCountRequested(buffer.readUInt16());
	
	return message;
};

module.exports = MsgMultiPublicLoginRequest;