/**
 * New node file
 */
var validator = require('validator');

var account;
var password;
var countRequested;

function MsgMultiPublicLoginRequest(){
	account = undefined;
	password = undefined;
	countRequested = undefined;
};

MsgMultiPublicLoginRequest.prototype.setAccount = function setAccount(value){
//	if(!validator.isByteLength(value, 0, 62)){
//		throw new Error("Account too long!");
//	}
//	if(!validator.isAlphanumeric(value)){
//		throw new Error("Account not a string!");
//	}
	account = value;
};

MsgMultiPublicLoginRequest.prototype.getAccount = function getAccount(){
	return account;
};

MsgMultiPublicLoginRequest.prototype.setPassword = function setPassword(value){
//	if(!validator.isByteLength(value, 0, 30)){
//		throw new Error("Password too long!");
//	}
//	if(!validator.isAlphanumeric(value)){
//		throw new Error("Password not a string!");
//	}
	password = value;
};

MsgMultiPublicLoginRequest.prototype.getPassword = function getPassword(){
	return password;
};

MsgMultiPublicLoginRequest.prototype.setCountRequested = function setCountRequested(value){
//	if(!validator.isInt(value)){
//		throw new Error("Count-Requested not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Count-Requested must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 2)){
//		throw new Error("Count-Requested out of range!");
//	}
	countRequested = value;
};

MsgMultiPublicLoginRequest.prototype.getCountRequested = function getCountRequested(){
	return countRequested;
};

MsgMultiPublicLoginRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(account);
	buffer.writeUInt8String(password);
	buffer.writeUInt16(countRequested);
};

MsgMultiPublicLoginRequest.prototype.getSize = function getSize(){
	var size = 2;
	size += account.length+1;
	size += password.length+1;
	
	return size;
};

MsgMultiPublicLoginRequest.prototype.toString = function toString(){
	var str = "";
	str+="Account: "+account+"\n";
	str+="Password: "+password+"\n";
	str+="Count Requested: "+countRequested.toString(16)+"\n";
	return str;
};


MsgMultiPublicLoginRequest.parse = function parse(buffer) {
	var message = new MsgMultiPublicLoginRequest();
	message.setAccount(buffer.readUInt8String());
	message.setPassword(buffer.readUInt8String());
	message.setCountRequested(buffer.readUInt16());
	
	return message;
};

module.exports = MsgMultiPublicLoginRequest;
