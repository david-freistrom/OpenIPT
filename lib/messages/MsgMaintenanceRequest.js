/**
 * New node file
 */
var validator = require('validator');

var idleTime;
var newAddress;

function MsgMaintenanceRequest(){
	idleTime = undefined;
	newAddress = undefined;
};

MsgMaintenanceRequest.prototype.setIdleTime = function setIdleTime(value){
	if(!validator.isInt(value)){
		throw new Error("Idle-Time not an integer!");
	}	
	if(value<0){
		throw new Error("Idle-Time must be >= 0 !");
	}
	if(!validator.isByteLength(value, 0, 16)){
		throw new Error("Idle-Time too long!");
	}
	
	idleTime = value;
};

MsgMaintenanceRequest.prototype.getIdleTime = function getIdleTime(){
	return idleTime;
};

MsgMaintenanceRequest.prototype.setNewAddress = function setNewAddress(value){
	if(!validator.isByteLength(value, 0, 255)){
		throw new Error("Address too long!");
	}
	if(!validator.isIP(value)){
		throw new Error("Invalid Address format!");
	}
	newAddress = value;
};

MsgMaintenanceRequest.prototype.getNewAddress = function getNewAddress(){
	return newAddress;
};

MsgMaintenanceRequest.prototype.write = function write(buffer) {	
	console.log("IdleTime: "+idleTime.toString(16));
	console.log("New Address: "+newAddress);
	
	buffer.writeUInt16(idleTime);
	buffer.writeUInt8String(newAddress);
};

MsgMaintenanceRequest.prototype.getSize = function getSize(){
	var size = 2;
	size += newAddress.length+1;
	return size;
};


MsgMaintenanceRequest.parse = function parse(buffer) {
	var message = new MsgMaintenanceRequest();
	message.setIdleTime(buffer.readUInt16());
	message.setNewAddress(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgMaintenanceRequest;