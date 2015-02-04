/**
 * New node file
 */
var validator = require('validator');

var account;
var reconnectionLogin;

function MsgServerModeReconnectRequest(){
	
	this.setAccount = function setAccount(value){
		if(!validator.isByteLength(value, 0, 255)){
			throw new Error("Account to long! Max length: 255");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Account not a String!");
		}
		account = value;
	};
	
	this.getAccount = function getAccount(){
		return account;
	};
	
	this.setReconnectionLogin = function setReconnectionLogin(value){
		if(!validator.isByteLength(value, 0, 255)){
			throw new Error("Reconnection Login to long! Max length: 255");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Reconnection Login not a String!");
		}
		reconnectionLogin = value;
	};
	
	this.getReconnectionLogin = function getReconnectionLogin(){
		return reconnectionLogin;
	};
	
	this.write = function(buffer) {	
		console.log("Account: "+account);
		console.log("Reconnection Login: "+reconnectionLogin);
		
		buffer.writeUInt8String(account);
		buffer.writeUInt8String(reconnectionLogin);
	};
	
	this.getSize = function getSize(){
		var size = 0;
		size += account.length;
		size += reconnectionLogin.length+1;
		return size;
	};
};

MsgServerModeReconnectRequest.parse = function parse(buffer) {
	var message = new MsgServerModeReconnectRequest();
	message.setAccount(buffer.readUInt8String());
	message.setReconnectionLogin(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgServerModeReconnectRequest;