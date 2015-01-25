/**
 * New node file
 */

var idleTime;
var newAddress;

function MsgMaintenanceRequest(){
	
	this.setIdleTime = function setIdleTime(value){
		idleTime = value;
	};
	
	this.getIdleTime = function getIdleTime(){
		return idleTime;
	};
	
	this.setNewAddress = function setNewAddress(value){
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
		size += newAddress.length;
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