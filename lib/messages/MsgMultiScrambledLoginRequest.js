/**
 * New node file
 */
var Constants = require('../Constants');

function MsgMultiScrambledLoginRequest(){
	this.account = undefined;
	this.password = undefined;
	this.scrambleKey = undefined;
	this.countRequested = undefined;
};

MsgMultiScrambledLoginRequest.prototype.setAccount = function setAccount(value){
	this.account = value;
};

MsgMultiScrambledLoginRequest.prototype.getAccount = function getAccount(){
	return this.account;
};

MsgMultiScrambledLoginRequest.prototype.setPassword = function setPassword(value){
	this.password = value;
};

MsgMultiScrambledLoginRequest.prototype.getPassword = function getPassword(){
	return this.password;
};

MsgMultiScrambledLoginRequest.prototype.setScrambleKey = function setScrambleKey(value){
	this.scrambleKey = value;
};

MsgMultiScrambledLoginRequest.prototype.getScrambleKey = function getScrambleKey(){
	return this.scrambleKey;
};

MsgMultiScrambledLoginRequest.prototype.setCountRequested = function setCountRequested(value){
	this.countRequested = value;
};

MsgMultiScrambledLoginRequest.prototype.getCountRequested = function getCountRequested(){
	return this.countRequested;
};

MsgMultiScrambledLoginRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(this.account);
	buffer.writeUInt8String(this.password);
	buffer.writeUInt8Array(this.scrambleKey);
	buffer.writeUInt16(this.countRequested);
};

MsgMultiScrambledLoginRequest.prototype.getSize = function getSize(){
	var size = 34;
	size += this.account.length+1;
	size += this.password.length+1;
	
	return size;
};

MsgMultiScrambledLoginRequest.prototype.toString = function toString(){
	var str = "";
	str+="Account: "+this.account+"\n";
	str+="Password: "+this.password+"\n";
	str+="Scramble-Key: "+this.scrambleKey.toString('hex')+"\n";
	str+="Count Requested: "+this.countRequested.toString(16)+"\n";
	
	return str;
};

MsgMultiScrambledLoginRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.MULTI_SCRAMBLED_LOGIN_RESPONSE;
};

MsgMultiScrambledLoginRequest.parse = function parse(buffer) {
	var message = new MsgMultiScrambledLoginRequest();
	message.setAccount(buffer.readUInt8String());
	message.setPassword(buffer.readUInt8String());
	message.setScrambleKey(buffer.readUInt8Array().toString('hex'));
	message.setCountRequested(buffer.readUInt16());
	
	return message;
};

module.exports = MsgMultiScrambledLoginRequest;