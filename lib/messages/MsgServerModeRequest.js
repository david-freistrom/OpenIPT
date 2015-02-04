/**
 * New node file
 */
var validator = require('validator');

var ownAddress;
var reconnectionLogin;

function MsgServerModeRequest(){
	

	this.setOwnAddress = function setOwnAddress(value){
		if(!validator.isByteLength(value, 0, 255)){
			throw new Error("Own Address to long! Max length: 255");
		}
		if(!validator.isIP(value)){
			throw new Error("Own Address not an IP!");
		}
		ownAddress = value;
	};
	
	this.getOwnAddress = function getOwnAddress(){
		return ownAddress;
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
	
	this.write = function write(buffer) {	
		console.log("Own Address: "+ownAddress);
		console.log("Reconnection Login: "+reconnectionLogin);
		
		buffer.writeUInt8String(ownAddress);
		buffer.writeUInt8String(reconnectionLogin);
	};
	
	this.getSize = function getSize(){
		var size = 0;
		size += ownAddress.length+1;
		size += reconnectionLogin.length+1;
		return size;
	};
};

MsgServerModeRequest.parse = function parse(buffer) {
	var message = new MsgServerModeRequest();
	message.setOwnAddress(buffer.readUInt8String());
	message.setReconnectionLogin(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgServerModeRequest;