/**
 * New node file
 */
var validator = require('validator');

var ownAddress;
var reconnectionLogin;



function MsgServerModeRequest(){
	ownAddress = undefined;
	reconnectionLogin = undefined;
};

MsgServerModeRequest.prototype.setOwnAddress = function setOwnAddress(value){
	if(!validator.isByteLength(value, 0, 255)){
		throw new Error("Own-Address too long!");
	}
	if(!validator.isIP(value)){
		throw new Error("Invalid Own-Address format!");
	}
	ownAddress = value;
};

MsgServerModeRequest.prototype.getOwnAddress = function getOwnAddress(){
	return ownAddress;
};

MsgServerModeRequest.prototype.setReconnectionLogin = function setReconnectionLogin(value){
	if(!validator.isByteLength(value, 0, 255)){
		throw new Error("Reconnection-Login too long!");
	}
	if(!validator.isAlphanumeric(value)){
		throw new Error("Reconnection-Login not a string!");
	}
	reconnectionLogin = value;
};

MsgServerModeRequest.prototype.getReconnectionLogin = function getReconnectionLogin(){
	return reconnectionLogin;
};

MsgServerModeRequest.prototype.write = function write(buffer) {	
	console.log("Own Address: "+ownAddress);
	console.log("Reconnection Login: "+reconnectionLogin);
	
	buffer.writeUInt8String(ownAddress);
	buffer.writeUInt8String(reconnectionLogin);
};

MsgServerModeRequest.prototype.getSize = function getSize(){
	var size = 0;
	size += ownAddress.length+1;
	size += reconnectionLogin.length+1;
	return size;
};

MsgServerModeRequest.parse = function parse(buffer) {
	var message = new MsgServerModeRequest();
	message.setOwnAddress(buffer.readUInt8String());
	message.setReconnectionLogin(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgServerModeRequest;