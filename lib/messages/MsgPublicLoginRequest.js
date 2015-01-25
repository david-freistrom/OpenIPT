/**
 * New node file
 */

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
		account = value;
	};
	
	this.setPassword = function setPassword(value){
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
		size += account.length;
		size += password.length;
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
