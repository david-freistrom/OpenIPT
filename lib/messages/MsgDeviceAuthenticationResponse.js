/**
 * New node file
 */
var validator = require('validator');

var account;
var password;
var address;
var description;

function MsgDeviceAuthenticationResponse(){
	
	this.setAccount = function setAccount(value){
		if(!validator.isByteLength(value, 0, 62)){
			throw new Error("Account too long!");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Account not a string!");
		}
		account = value;
	};
	
	this.getAccount = function getAccount(){
		return account;
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
	
	this.getPassword = function getPassword(){
		return password;
	};
	
	this.setAddress = function setAddress(value){
		if(!validator.isByteLength(value, 0, 62)){
			throw new Error("Address too long!");
		}
		if(!validator.isIP(value)){
			throw new Error("Invalid Address format!");
		}
		address = value;
	};
	
	this.getAddress = function getAddress(){
		return address;
	};
	
	this.setDescription = function setDescription(value){
		if(!validator.isByteLength(value, 0, 255)){
			throw new Error("Description to long!");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Description not a string!");
		}
		description = value;
	};
	
	this.getDescription = function getDescription(){
		return description;
	};
	
	this.write = function write(buffer) {	
		console.log("Account [length]: "+account+" ["+account.length+"]");
		console.log("Password [length]: "+password+" ["+password.length+"]");
		console.log("Address [length]: "+address+" ["+address.length+"]");
		console.log("Description [length]: "+description+" ["+description.length+"]");
		
		buffer.writeUInt8String(account);
		buffer.writeUInt8String(password);
		buffer.writeUInt8String(address);
		buffer.writeUInt8String(description);
	};
	
	this.getSize = function getSize(){
		var size = 0;
		size += account.length+1;
		size += password.length+1;
		size += address.length+1;
		size += description.length+1;
		
		return size;
	};
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