/**
 * New node file
 */
var validator = require('validator');
var Constants = require('../Constants');

function MsgServerModeRequest(){
	this.ownAddress = undefined;
	this.reconnectionLogin = undefined;
};

MsgServerModeRequest.prototype.setOwnAddress = function setOwnAddress(value){
	this.ownAddress = value;
};

MsgServerModeRequest.prototype.getOwnAddress = function getOwnAddress(){
	return this.ownAddress;
};

MsgServerModeRequest.prototype.setReconnectionLogin = function setReconnectionLogin(value){
	this.reconnectionLogin = value;
};

MsgServerModeRequest.prototype.getReconnectionLogin = function getReconnectionLogin(){
	return this.reconnectionLogin;
};

MsgServerModeRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt8String(this.ownAddress);
	buffer.writeUInt8String(this.reconnectionLogin);
};

MsgServerModeRequest.prototype.getSize = function getSize(){
	var size = 0;
	size += this.ownAddress.length+1;
	size += this.reconnectionLogin.length+1;
	return size;
};

MsgServerModeRequest.prototype.toString = function toString(){
	var str = "";
	str+="Own Account: "+ownAddress+"\n";
	str+="Reconnection-Login: "+reconnectionLogin+"\n";
	return str;
};

MsgServerModeRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.SERVER_MODE_RESPONSE;
};

MsgServerModeRequest.parse = function parse(buffer) {
	var message = new MsgServerModeRequest();
	message.setOwnAddress(buffer.readUInt8String());
	message.setReconnectionLogin(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgServerModeRequest;