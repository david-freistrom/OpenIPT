/**
 * New node file
 */

var account;
var password;
var scrambleKey;

function MsgScrambledLoginRequest(){
	
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
	
	this.setScrambleKey = function setScrambleKey(value){
		scrambleKey = value;
	};
	
	this.getScrambleKey = function getScrambleKey(){
		return scrambleKey;
	};
	
	this.write = function write(buffer) {		
		console.log("Account: "+account);
		console.log("Password: "+password);
		console.log("Scramble Key: "+scrambleKey);
		
		buffer.writeUInt8String(account);
		buffer.writeUInt8String(password);
		buffer.writeUInt8String(scrambleKey);
	};
	
	this.getSize = function getSize(){
		var size = 0;
		size += account.length;
		size += password.length;
		size += scrambleKey.length;
		
		return size;
	};
};

MsgScrambledLoginRequest.parse = function parse(buffer) {
	var message = new MsgScrambledLoginRequest();
	message.setAccount(buffer.readUInt8String());
	message.setPassword(buffer.readUInt8String());
	message.setScrambleKey(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgScrambledLoginRequest;
