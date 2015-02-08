/**
 * New node file
 */
var validator = require('validator');
var Constants = require('../Constants');

function MsgMaintenanceRequest(){
	this.idleTime = undefined;
	this.newAddress = undefined;
};

MsgMaintenanceRequest.prototype.setIdleTime = function setIdleTime(value){
	this.idleTime = value;
};

MsgMaintenanceRequest.prototype.getIdleTime = function getIdleTime(){
	return this.idleTime;
};

MsgMaintenanceRequest.prototype.setNewAddress = function setNewAddress(value){
	this.newAddress = value;
};

MsgMaintenanceRequest.prototype.getNewAddress = function getNewAddress(){
	return this.newAddress;
};

MsgMaintenanceRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt16(this.idleTime);
	buffer.writeUInt8String(this.newAddress);
};

MsgMaintenanceRequest.prototype.getSize = function getSize(){
	return 2+this.newAddress.length+1;
};

MsgMaintenanceRequest.prototype.toString = function toString(){
	var str = "";
	str+="Idle-Time: "+this.idleTime.toString(16)+"\n";
	str+="New Address: "+this.newAddress+"\n";
	return str;
};

MsgMaintenanceRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.MAINTENANCE_RESPONSE;
};

MsgMaintenanceRequest.parse = function parse(buffer) {
	var message = new MsgMaintenanceRequest();
	message.setIdleTime(buffer.readUInt16());
	message.setNewAddress(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgMaintenanceRequest;