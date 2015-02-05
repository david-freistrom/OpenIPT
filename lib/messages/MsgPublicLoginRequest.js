/**
 * New node file
 */
var validator = require('validator');

var account;
var password;

function MsgPublicLoginRequest(){
	
	this.write = function write(buffer) {	
		console.log("Username [length]: "+account+" ["+account.length+"]");
		console.log("Password [length]: "+password+" ["+password.length+"]");
		
		buffer.writeUInt8String(account);
		buffer.writeUInt8String(password);
		
	};
	
	this.setAccount = function setAccount(value){
		if(!validator.isByteLength(value, 0, 62)){
			throw new Error("Account too long!");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Account not a string!");
		}
		account = value;
	};
	
	this.setPassword = function setPassword(value){
		if(!validator.isByteLength(value, 0, 30)){
			throw new Error("Password too long!");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Password not a string!");
		}
		password = value;
	};
	
	this.getAccount = function getAccount(){
		return account;
	};
	
	this.getPassword = function getPassword(){
		return password;
	};
	
	this.getSize = function getSize(){
		var size = 0;
		size += account.length+1;
		size += password.length+1;
		return size;
	};
};

MsgPublicLoginRequest.parse = function parse(buffer) {
	var message = new MsgPublicLoginRequest();
	message.setAccount(buffer.readUInt8String());
	message.setPassword(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgPublicLoginRequest;
