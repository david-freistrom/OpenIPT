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

	this.setAccount = function setAccount(value){
		if(!validator.isByteLength(value, 0, 62)){
			throw new Error("Account is to long! Max length: 62");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Account is not a String!");
		}
		account = value;
	};
	
	this.getAccount = function getAccount(){
		return account;
	};
	
	this.setPassword = function setPassword(value){
		if(!validator.isByteLength(value, 0, 30)){
			throw new Error("Password is to long! Max length: 30");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Password is not a String!");
		}
		password = value;
	};
	
	this.getPassword = function getPassword(){
		return password;
	};
	
	this.setScrambleKey = function setScrambleKey(value){
		if(!validator.isByteLength(value, 32, 32)){
			throw new Error("Scramble Key has to be 32 bit!");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Scramble Key is not a String!");
		}
		scrambleKey = value;
	};
	
	this.getScrambleKey = function getScrambleKey(){
		return scrambleKey;
	};
	
	this.setCountRequested = function setCountRequested(value){
		if(!validator.isInt(value)){
			throw new Error("Count Requested is not an integer!");
		}	
		if(value<0){
			throw new Error("Count Requested must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 2)){
			throw new Error("Count Requested is out of range!");
		}
		countRequested = value;
	};
	
	this.getCountRequested = function getCountRequested(){
		return countRequested;
	};
	
	this.write = function write(buffer) {	
		console.log("Account: "+account);
		console.log("Password: "+password);
		console.log("Scramble Key: "+scrambleKey);
		console.log("Count Requested: "+countRequested.toString(16));
		
		buffer.writeUInt8String(account);
		buffer.writeUInt8String(password);
		buffer.writeUInt8Array(new Buffer(scrambleKey, 'hex'));
		buffer.writeUInt16(countRequested);
	};
	
	this.getSize = function getSize(){
		var size = 34;
		size += account.length+1;
		size += password.length+1;
		
		return size;
	};
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