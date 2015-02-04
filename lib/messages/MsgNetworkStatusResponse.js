/**
 * New node file
 */
var validator = require('validator');

var deviceType;
var status1;
var status2;
var status3;
var status4;
var status5;
var status6;
var status7;

function MsgNetworkStatusResponse(){
	
	this.setDeviceType = function setDeviceType(value){
		if(!validator.isInt(value)){
			throw new Error("Device Type is not an integer!");
		}	
		if(deviceType<0x00 || deviceType>0x01){
			throw new Error("Device Type not defined. Must be 0x00 or 0x01 !");
		}
		deviceType = value;
	};
	
	this.getDeviceType = function getDeviceType(){
		return deviceType;
	};
		
	this.setStatus1 = function setStatus1(value){
		if(!validator.isInt(value)){
			throw new Error("Status 1 is not an integer!");
		}	
		if(value<0){
			throw new Error("Status 1 must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 4)){
			throw new Error("Status 1 is out of range!");
		}
		status1 = value;
	};
	
	this.getStatus1 = function getStatus1(){
		return status1;
	};
		
	this.setStatus2 = function setStatus2(value){
		if(!validator.isInt(value)){
			throw new Error("Status 2 is not an integer!");
		}	
		if(value<0){
			throw new Error("Status 2 must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 4)){
			throw new Error("Status 2 is out of range!");
		}
		status2 = value;
	};
	
	this.getStatus2 = function getStatus2(){
		return status2;
	};
		
	this.setStatus3 = function setStatus3(value){
		if(!validator.isInt(value)){
			throw new Error("Status 3 is not an integer!");
		}	
		if(value<0){
			throw new Error("Status 3 must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 4)){
			throw new Error("Status 3 is out of range!");
		}
		status3 = value;
	};
	
	this.getStatus3 = function getStatus3(){
		return status3;
	};
		
	this.setStatus4 = function setStatus4(value){
		if(!validator.isInt(value)){
			throw new Error("Status 4 is not an integer!");
		}	
		if(value<0){
			throw new Error("Status 4 must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 4)){
			throw new Error("Status 4 is out of range!");
		}
		status4 = value;
	};
	
	this.getStatus4 = function getStatus4(){
		return status4;
	};
		
	this.setStatus5 = function setStatus5(value){
		if(!validator.isInt(value)){
			throw new Error("Status 5 is not an integer!");
		}	
		if(value<0){
			throw new Error("Status 5 must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 4)){
			throw new Error("Status 5 is out of range!");
		}
		status5 = value;
	};
	
	this.getStatus5 = function getStatus5(){
		return status5;
	};
		
	this.setStatus6 = function setStatus6(value){
		if(!validator.isByteLength(value, 0, 16)){
			throw new Error("Status 6 is to long! Max length: 16");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Status 6 is not a String!");
		}
		status6 = value;
	};
	
	this.getStatus6 = function getStatus6(){
		return status6;
	};
	
	this.setStatus7 = function setStatus7(value){
		if(!validator.isByteLength(value, 0, 16)){
			throw new Error("Status 7 is to long! Max length: 16");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Status 7 is not a String!");
		}
		status7 = value;
	};
	
	this.getStatus7 = function getStatus7(){
		return status7;
	};
		
	this.write = function write(buffer) {		
		console.log("Device Type: "+deviceType.toString(16));
		console.log("Status 1: "+status1.toString(16));
		console.log("Status 2: "+status2.toString(16));
		console.log("Status 3: "+status3.toString(16));
		console.log("Status 4: "+status4.toString(16));
		console.log("Status 5: "+status5.toString(16));
		console.log("Status 6: "+status6);
		console.log("Status 7: "+status7);
		
		buffer.writeUInt8(deviceType);
		buffer.writeUInt32(status1);
		buffer.writeUInt32(status2);
		buffer.writeUInt32(status3);
		buffer.writeUInt32(status4);
		buffer.writeUInt32(status5);
		buffer.writeUInt8String(status6);
		buffer.writeUInt8String(status7);
	};
	
	this.getSize = function getSize(){
		var size = 21;
		size += status6.length+1;
		size += status7.length+1;
		return size;
	};
};

MsgNetworkStatusResponse.parse = function parse(buffer) {
	var message = new MsgNetworkStatusResponse();
	message.setDeviceType(buffer.readUInt8());
	message.setStatus1(buffer.readUInt32());
	message.setStatus2(buffer.readUInt32());
	message.setStatus3(buffer.readUInt32());
	message.setStatus4(buffer.readUInt32());
	message.setStatus5(buffer.readUInt32());
	message.setStatus7(buffer.readUInt8String());
	message.setStatus8(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgNetworkStatusResponse;