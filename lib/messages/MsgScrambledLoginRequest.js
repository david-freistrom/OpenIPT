/**
 * New node file
 */
var validator = require('validator');

var account;
var password;
var scrambleKey;

function MsgScrambledLoginRequest(){
	account = undefined;
	password = undefined;
	scrambleKey = undefined;
};

MsgScrambledLoginRequest.prototype.setAccount = function setAccount(value){
//	if(!validator.isByteLength(value, 0, 62)){
//		throw new Error("Account too long!");
//	}
//	if(!validator.isAlphanumeric(value)){
//		throw new Error("Account not a string!");
//	}
	account = value;
};

MsgScrambledLoginRequest.prototype.getAccount = function getAccount(){
	return account;
};

MsgScrambledLoginRequest.prototype.setPassword = function setPassword(value){
//	if(!validator.isByteLength(value, 0, 30)){
//		throw new Error("Password too long!");
//	}
//	if(!validator.isAlphanumeric(value)){
//		throw new Error("Password not a string!");
//	}
	password = value;
};

MsgScrambledLoginRequest.prototype.getPassword = function getPassword(){
	return password;
};

MsgScrambledLoginRequest.prototype.setScrambleKey = function setScrambleKey(value){
//	if(!validator.isAlphanumeric(value)){
//		throw new Error("Scramble-Key not a string!");
//	}	
//	if(!validator.isByteLength(value, 32, 32)){
//		throw new Error("Scramble-Key must have a length of 32 byte!");
//	}
	scrambleKey = value;
};

MsgScrambledLoginRequest.prototype.getScrambleKey = function getScrambleKey(){
	return scrambleKey;
};

MsgScrambledLoginRequest.prototype.write = function write(buffer) {		
	buffer.writeUInt8String(account);
	buffer.writeUInt8String(password);
	buffer.writeUInt8Array(new Buffer(scrambleKey, 'hex'));
};

MsgScrambledLoginRequest.prototype.getSize = function getSize(){
	var size = 32;
	size += account.length+1;
	size += password.length+1;
	size += scrambleKey.length+1;
	
	return size;
};

MsgScrambledLoginRequest.prototype.toString = function toString(){
	var str = "";
	str += "Account: "+account+"\n";
	str += "Password: "+password+"\n";
	str += "Scramble-Key: "+scrambleKey+"\n";
	return str;
};


MsgScrambledLoginRequest.parse = function parse(buffer) {
	var message = new MsgScrambledLoginRequest();
	message.setAccount(buffer.readUInt8String());
	message.setPassword(buffer.readUInt8String());
	message.setScrambleKey(buffer.readUInt8Array());
	
	return message;
};

module.exports = MsgScrambledLoginRequest;
