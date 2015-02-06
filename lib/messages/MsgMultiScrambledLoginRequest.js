/**
 * New node file
 */
var validator = require('validator');

var Utils = require('../Utils');

var account;
var password;
var scrambleKey;
var countRequested;

function MsgMultiScrambledLoginRequest(){
	account = undefined;
	password = undefined;
	scrambleKey = undefined;
	countRequested = undefined;
};

MsgMultiScrambledLoginRequest.prototype.setAccount = function setAccount(value){
	if(!validator.isByteLength(value, 0, 62)){
		throw new Error("Account too long!");
	}
	if(!validator.isAlphanumeric(value)){
		throw new Error("Account not a String!");
	}
	account = value;
};

MsgMultiScrambledLoginRequest.prototype.getAccount = function getAccount(){
	return account;
};

MsgMultiScrambledLoginRequest.prototype.setPassword = function setPassword(value){
	if(!validator.isByteLength(value, 0, 30)){
		throw new Error("Password too long!");
	}
	if(!validator.isAlphanumeric(value)){
		throw new Error("Password not a string!");
	}
	password = value;
};

MsgMultiScrambledLoginRequest.prototype.getPassword = function getPassword(){
	return password;
};

MsgMultiScrambledLoginRequest.prototype.setScrambleKey = function setScrambleKey(value){
	if(!validator.isByteLength(value, 32, 32)){
		throw new Error("Scramble-Key must have a length of 32 byte!");
	}
	if(!validator.isAlphanumeric(value)){
		throw new Error("Scramble-Key not a string!");
	}
	scrambleKey = value;
};

MsgMultiScrambledLoginRequest.prototype.getScrambleKey = function getScrambleKey(){
	return scrambleKey;
};

MsgMultiScrambledLoginRequest.prototype.setCountRequested = function setCountRequested(value){
	if(!validator.isInt(value)){
		throw new Error("Count-Requested not an integer!");
	}	
	if(value<0){
		throw new Error("Count-Requested must be >= 0 !");
	}
	if(!validator.isByteLength(value, 1, 2)){
		throw new Error("Count-Requested out of range!");
	}
	countRequested = value;
};

MsgMultiScrambledLoginRequest.prototype.getCountRequested = function getCountRequested(){
	return countRequested;
};

MsgMultiScrambledLoginRequest.prototype.write = function write(buffer) {	
	console.log("Account: "+account);
	console.log("Password: "+password);
	console.log("Scramble Key: "+scrambleKey);
	console.log("Count Requested: "+countRequested.toString(16));
	
	buffer.writeUInt8String(account);
	buffer.writeUInt8String(password);
	buffer.writeUInt8Array(new Buffer(scrambleKey, 'hex'));
	buffer.writeUInt16(countRequested);
};

MsgMultiScrambledLoginRequest.prototype.getSize = function getSize(){
	var size = 34;
	size += account.length+1;
	size += password.length+1;
	
	return size;
};


MsgMultiScrambledLoginRequest.parse = function parse(buffer) {
	var message = new MsgMultiScrambledLoginRequest();
	message.setAccount(buffer.readUInt8String());
	message.setPassword(buffer.readUInt8String());
	message.setScrambleKey(buffer.readUInt8Array().toString('hex'));
	message.setCountRequested(buffer.readUInt16());
	
	console.log("Account: "+message.getAccount());
	console.log("Password: "+message.getPassword());
	console.log("Scramble Key: "+message.getScrambleKey());
	console.log("Count Requested: "+message.getCountRequested());
	
	return message;
};

module.exports = MsgMultiScrambledLoginRequest;