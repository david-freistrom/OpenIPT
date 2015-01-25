/**
 * New node file
 */

var account;
var password;
var countRequested;

function MsgMultiPublicLoginRequest(){
	
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
	
	this.setCountRequested = function setCountRequested(value){
		countRequested = value;
	};
	
	this.getCountRequested = function getCountRequested(){
		return countRequested;
	};
	
	this.write = function write(buffer) {	
		console.log("Account: "+account.toString(16));
		console.log("Password: "+password.toString(16));
		console.log("Count Requested: "+countRequested.toString(16));
		
		buffer.writeUInt8String(account);
		buffer.writeUInt8String(password);
		buffer.writeUInt16(countRequested);
	};
	
	this.getSize = function getSize(){
		var size = 0;
		size += account.length;
		size += password.length;
		size += 2;
		
		return size;
	};
};

MsgMultiPublicLoginRequest.parse = function parse(buffer) {
	var message = new MsgMultiPublicLoginRequest();
	message.setAccount(buffer.readUInt8String());
	message.setPassword(buffer.readUInt8String());
	message.setCountRequested(buffer.readUInt16());
	
	return message;
};

module.exports = MsgMultiPublicLoginRequest;
