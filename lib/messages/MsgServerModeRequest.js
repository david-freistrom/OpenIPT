/**
 * New node file
 */

var ownAddress;
var reconnectionLogin;

function MsgServerModeRequest(){
	

	this.setOwnAddress = function setOwnAddress(value){
		ownAddress = value;
	};
	
	this.getOwnAddress = function getOwnAddress(){
		return ownAddress;
	};
	
	this.setReconnectionLogin = function setReconnectionLogin(value){
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
		size += ownAddress.length;
		size += reconnectionLogin.length;
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