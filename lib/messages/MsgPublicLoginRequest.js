/**
 * New node file
 */
var validator = require('validator');
var Constants = require('../Constants');

var account;
var password;

function MsgPublicLoginRequest(){
	account = undefined;
	password = undefined;
};

MsgPublicLoginRequest.prototype.setAccount = function setAccount(value){
//	if(!validator.isByteLength(value, 0, 62)){
//		throw new Error("Account too long!");
//	}
//	if(!validator.isAlphanumeric(value)){
//		throw new Error("Account not a string!");
//	}
	account = value;
};

MsgPublicLoginRequest.prototype.getAccount = function getAccount(){
	return account;
};

MsgPublicLoginRequest.prototype.setPassword = function setPassword(value){
//	if(!validator.isByteLength(value, 0, 30)){
//		throw new Error("Password too long!");
//	}
//	if(!validator.isAlphanumeric(value)){
//		throw new Error("Password not a string!");
//	}
	password = value;
}; 

MsgPublicLoginRequest.prototype.getPassword = function getPassword(){
	return password;
}; 

MsgPublicLoginRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(account);
	buffer.writeUInt8String(password);
}; 

MsgPublicLoginRequest.prototype.getSize = function getSize(){
	var size = 0;
	size += account.length+1;
	size += password.length+1;
	return size;
}; 

MsgPublicLoginRequest.prototype.toString = function toString(){
	var str = "";
	str+="Account: "+account+"\n";
	str+="Password: "+password+"\n";
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
