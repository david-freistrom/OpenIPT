/**
 * New node file
 */
var validator = require('validator');

var idleTime;
var newAddress;

function MsgMaintenanceRequest(){
	
	this.setIdleTime = function setIdleTime(value){
		if(!validator.isInt(value)){
			throw new Error("Idle Time is not an integer!");
		}	
		if(value<0){
			throw new Error("Idle Time must be >= 0 !");
		}
		if(!validator.isByteLength(value, 0, 16)){
			throw new Error("Idle Time is to long! Max length: 16");
		}
		
		idleTime = value;
	};
	
	this.getIdleTime = function getIdleTime(){
		return idleTime;
	};
	
	this.setNewAddress = function setNewAddress(value){
		if(!validator.isByteLength(value, 0, 255)){
			throw new Error("New Address is to long! Max length: 255");
		}
		if(!validator.isIP(value)){
			throw new Error("New Address is not an IP");
		}
		newAddress = value;
	};
	
	this.getNewAddress = function getNewAddress(){
		return newAddress;
	};
	
	this.write = function write(buffer) {	
		console.log("IdleTime: "+idleTime.toString(16));
		console.log("New Address: "+newAddress);
		
		buffer.writeUInt16(idleTime);
		buffer.writeUInt8String(newAddress);
	};
	
	this.getSize = function getSize(){
		var size = 2;
		size += newAddress.length+1;
		return size;
	};
	
};

MsgMaintenanceRequest.parse = function parse(buffer) {
	var message = new MsgMaintenanceRequest();
	message.setIdleTime(buffer.readUInt16());
	message.setNewAddress(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgMaintenanceRequest;