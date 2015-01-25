/**
 * New node file
 */

var account;
var password;
var address;
var description;

function MsgDeviceAuthenticationResponse(){
	
	this.setAccount = function setAccount(value){
		account = value;
	};
	
	this.getAccount = function getAccount(){
		return account;
	};
	
	this.setPassword = function setPassword(value){
		password = value;
	};
	
	this.getPassword = function getPassword(){
		return password;
	};
	
	this.setAddress = function setAddress(value){
		address = value;
	};
	
	this.getAddress = function getAddress(){
		return address;
	};
	
	this.setDescription = function setDescription(value){
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
		size += account.length;
		size += password.length;
		size += address.length;
		size += description.length;
		
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