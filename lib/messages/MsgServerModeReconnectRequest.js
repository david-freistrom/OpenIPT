
var Constants = require('../Constants');

function MsgServerModeReconnectRequest(){
	this.account = undefined;
	this.reconnectionLogin = undefined;
};

MsgServerModeReconnectRequest.prototype.setAccount = function setAccount(value){
	this.account = value;
};

MsgServerModeReconnectRequest.prototype.getAccount = function getAccount(){
	return this.account;
};

MsgServerModeReconnectRequest.prototype.setReconnectionLogin = function setReconnectionLogin(value){
	this.reconnectionLogin = value;
};

MsgServerModeReconnectRequest.prototype.getReconnectionLogin = function getReconnectionLogin(){
	return this.reconnectionLogin;
};

MsgServerModeReconnectRequest.prototype.write = function(buffer) {	
	buffer.writeUInt8String(this.account);
	buffer.writeUInt8String(this.reconnectionLogin);
};

MsgServerModeReconnectRequest.prototype.getSize = function getSize(){
	var size = 0;
	size += this.account.length;
	size += this.reconnectionLogin.length+1;
	return size;
};

MsgServerModeReconnectRequest.prototype.toString = function toString(){
	var str = "";
	str+="Account: "+this.account+"\n";
	str+="Reconnection-Login: "+this.reconnectionLogin+"\n";
	return str;
};

MsgServerModeReconnectRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.SERVER_MODE_RECONNECT_RESPONSE;
};

MsgServerModeReconnectRequest.parse = function parse(buffer) {
	var message = new MsgServerModeReconnectRequest();
	message.setAccount(buffer.readUInt8String());
	message.setReconnectionLogin(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgServerModeReconnectRequest;