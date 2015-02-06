/**
 * New node file
 */
var validator = require('validator');

var account;
var reconnectionLogin;

function MsgServerModeReconnectRequest(){
	account = undefined;
	reconnectionLogin = undefined;
};

MsgServerModeReconnectRequest.prototype.setAccount = function setAccount(value){
	if(!validator.isByteLength(value, 0, 255)){
		throw new Error("Account too long!");
	}
	if(!validator.isAlphanumeric(value)){
		throw new Error("Account not a string!");
	}
	account = value;
};

MsgServerModeReconnectRequest.prototype.getAccount = function getAccount(){
	return account;
};

MsgServerModeReconnectRequest.prototype.setReconnectionLogin = function setReconnectionLogin(value){
	if(!validator.isByteLength(value, 0, 255)){
		throw new Error("Reconnection-Login too long!");
	}
	if(!validator.isAlphanumeric(value)){
		throw new Error("Reconnection-Login not a string!");
	}
	reconnectionLogin = value;
};

MsgServerModeReconnectRequest.prototype.getReconnectionLogin = function getReconnectionLogin(){
	return reconnectionLogin;
};

MsgServerModeReconnectRequest.prototype.write = function(buffer) {	
	console.log("Account: "+account);
	console.log("Reconnection Login: "+reconnectionLogin);
	
	buffer.writeUInt8String(account);
	buffer.writeUInt8String(reconnectionLogin);
};

MsgServerModeReconnectRequest.prototype.getSize = function getSize(){
	var size = 0;
	size += account.length;
	size += reconnectionLogin.length+1;
	return size;
};

MsgServerModeReconnectRequest.parse = function parse(buffer) {
	var message = new MsgServerModeReconnectRequest();
	message.setAccount(buffer.readUInt8String());
	message.setReconnectionLogin(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgServerModeReconnectRequest;