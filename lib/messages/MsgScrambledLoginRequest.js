/**
 * New node file
 */
var validator = require('validator');

var account;
var password;
var scrambleKey;

function MsgScrambledLoginRequest(){
	
	this.setAccount = function setAccount(value){
		if(!validator.isByteLength(value, 0, 62)){
			throw new Error("Account to long! Max length: 62");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Account not a String!");
		}
		account = value;
	};
	
	this.getAccount = function getAccount(){
		return account;
	};
	
	this.setPassword = function setPassword(value){
		if(!validator.isByteLength(value, 0, 30)){
			throw new Error("Password to long! Max length: 30");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Password not a String!");
		}
		password = value;
	};
	
	this.getPassword = function getPassword(){
		return password;
	};
	
	this.setScrambleKey = function setScrambleKey(value){
		if(!validator.isAlphanumeric(value)){
			throw new Error("Scramble-Key not a String!");
		}	
		if(!validator.isByteLength(value, 32, 32)){
			throw new Error("Scramble-Key must have a length of 32 byte!");
		}
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
		buffer.writeUInt8Array(new Buffer(scrambleKey, 'hex'));
	};
	
	this.getSize = function getSize(){
		var size = 32;
		size += account.length+1;
		size += password.length+1;
		size += scrambleKey.length+1;
		
		return size;
	};
};

MsgScrambledLoginRequest.parse = function parse(buffer) {
	var message = new MsgScrambledLoginRequest();
	message.setAccount(buffer.readUInt8String());
	message.setPassword(buffer.readUInt8String());
	message.setScrambleKey(buffer.readUInt8Array().toString('hex'));
	
	console.log("Account: "+message.getAccount());
	console.log("Password: "+message.getPassword());
	console.log("Scramble Key: "+message.getScrambleKey());
	
	return message;
};

module.exports = MsgScrambledLoginRequest;
