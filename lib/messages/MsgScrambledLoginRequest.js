
var Constants = require('../Constants');

function MsgScrambledLoginRequest(){
	this.account = undefined;
	this.password = undefined;
	this.scrambleKey = undefined;
};

MsgScrambledLoginRequest.prototype.setAccount = function setAccount(value){
	this.account = value;
};

MsgScrambledLoginRequest.prototype.getAccount = function getAccount(){
	return this.account;
};

MsgScrambledLoginRequest.prototype.setPassword = function setPassword(value){
	this.password = value;
};

MsgScrambledLoginRequest.prototype.getPassword = function getPassword(){
	return this.password;
};

MsgScrambledLoginRequest.prototype.setScrambleKey = function setScrambleKey(value){
	this.scrambleKey = value;
};

MsgScrambledLoginRequest.prototype.getScrambleKey = function getScrambleKey(){
	return this.scrambleKey;
};

MsgScrambledLoginRequest.prototype.write = function write(buffer) {		
	buffer.writeUInt8String(this.account);
	buffer.writeUInt8String(this.password);
	buffer.writeUInt8Array(this.scrambleKey);
};

MsgScrambledLoginRequest.prototype.getSize = function getSize(){
	var size = 32;
	size += this.account.length+1;
	size += this.password.length+1;
	size += this.scrambleKey.length;
	
	return size;
};

MsgScrambledLoginRequest.prototype.toString = function toString(){
	var str = "";
	str += "Account: "+this.account+"\n";
	str += "Password: "+this.password+"\n";
	str += "Scramble-Key: "+this.scrambleKey.toString('hex')+"\n";
	return str;
};

MsgScrambledLoginRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.SCRAMBLED_LOGIN_RESPONSE;
};

MsgScrambledLoginRequest.parse = function parse(buffer) {
	
	buffer.scrambleBufferPart(Constants.DEFAULT_SCRAMBLE_KEY, buffer.getOffset(), buffer.getLength());
	
	var message = new MsgScrambledLoginRequest();
	message.setAccount(buffer.readUInt8String());
	message.setPassword(buffer.readUInt8String());
	message.setScrambleKey(buffer.readUInt8Array());
	
	return message;
};

module.exports = MsgScrambledLoginRequest;
