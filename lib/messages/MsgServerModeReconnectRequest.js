/**
 * New node file
 */

var account;
var reconnectionLogin;

function MsgServerModeReconnectRequest(){
	
	this.setAccount = function setAccount(value){
		account = value;
	};
	
	this.getAccount = function getAccount(){
		return account;
	};
	
	this.setReconnectionLogin = function setReconnectionLogin(value){
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
		size += reconnectionLogin.length;
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