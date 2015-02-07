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
	deviceType = undefined;
	status1 = undefined;
	status2 = undefined;
	status3 = undefined;
	status4 = undefined;
	status5 = undefined;
	status6 = undefined;
	status7 = undefined;
};

MsgNetworkStatusResponse.prototype.setDeviceType = function setDeviceType(value){
//	if(!validator.isInt(value)){
//		throw new Error("Device-Type not an integer!");
//	}	
//	if(deviceType<0x00 || deviceType>0x01){
//		throw new Error("Unknown Device-Type value!");
//	}
	deviceType = value;
};

MsgNetworkStatusResponse.prototype.getDeviceType = function getDeviceType(){
	return deviceType;
};

MsgNetworkStatusResponse.prototype.setStatus1 = function setStatus1(value){
//	if(!validator.isInt(value)){
//		throw new Error("Status 1 not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Status 1 must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 4)){
//		throw new Error("Status 1 out of range!");
//	}
	status1 = value;
};

MsgNetworkStatusResponse.prototype.getStatus1 = function getStatus1(){
	return status1;
};

MsgNetworkStatusResponse.prototype.setStatus2 = function setStatus2(value){
//	if(!validator.isInt(value)){
//		throw new Error("Status 2 not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Status 2 must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 4)){
//		throw new Error("Status 2 out of range!");
//	}
	status2 = value;
};

MsgNetworkStatusResponse.prototype.getStatus2 = function getStatus2(){
	return status2;
};

MsgNetworkStatusResponse.prototype.setStatus3 = function setStatus3(value){
//	if(!validator.isInt(value)){
//		throw new Error("Status 3 not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Status 3 must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 4)){
//		throw new Error("Status 3 out of range!");
//	}
	status3 = value;
};

MsgNetworkStatusResponse.prototype.getStatus3 = function getStatus3(){
	return status3;
};

MsgNetworkStatusResponse.prototype.setStatus4 = function setStatus4(value){
//	if(!validator.isInt(value)){
//		throw new Error("Status 4 not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Status 4 must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 4)){
//		throw new Error("Status 4 out of range!");
//	}
	status4 = value;
};

MsgNetworkStatusResponse.prototype.getStatus4 = function getStatus4(){
	return status4;
};

MsgNetworkStatusResponse.prototype.setStatus5 = function setStatus5(value){
//	if(!validator.isInt(value)){
//		throw new Error("Status 5 not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Status 5 must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 4)){
//		throw new Error("Status 5 out of range!");
//	}
	status5 = value;
};

MsgNetworkStatusResponse.prototype.getStatus5 = function getStatus5(){
	return status5;
};

MsgNetworkStatusResponse.prototype.setStatus6 = function setStatus6(value){
//	if(!validator.isByteLength(value, 0, 16)){
//		throw new Error("Status 6 too long!");
//	}
//	if(!validator.isAlphanumeric(value)){
//		throw new Error("Status 6 not a string!");
//	}
	status6 = value;
};

MsgNetworkStatusResponse.prototype.getStatus6 = function getStatus6(){
	return status6;
};

MsgNetworkStatusResponse.prototype.setStatus7 = function setStatus7(value){
//	if(!validator.isByteLength(value, 0, 16)){
//		throw new Error("Status 7 too long!");
//	}
//	if(!validator.isAlphanumeric(value)){
//		throw new Error("Status 7 not a string!");
//	}
	status7 = value;
};

MsgNetworkStatusResponse.prototype.getStatus7 = function getStatus7(){
	return status7;
};

MsgNetworkStatusResponse.prototype.write = function write(buffer) {		
	buffer.writeUInt8(deviceType);
	buffer.writeUInt32(status1);
	buffer.writeUInt32(status2);
	buffer.writeUInt32(status3);
	buffer.writeUInt32(status4);
	buffer.writeUInt32(status5);
	buffer.writeUInt8String(status6);
	buffer.writeUInt8String(status7);
};

MsgNetworkStatusResponse.prototype.getSize = function getSize(){
	var size = 21;
	size += status6.length+1;
	size += status7.length+1;
	return size;
};

MsgNetworkStatusResponse.prototype.toString = function toString(){
	var str = "";
	str+="Device-Type: "+deviceType.toString(16)+"\n";
	str+="Status 1: "+status1.toString(16)+"\n";
	str+="Status 2: "+status2.toString(16)+"\n";
	str+="Status 3: "+status3.toString(16)+"\n";
	str+="Status 4: "+status4.toString(16)+"\n";
	str+="Status 5: "+status5.toString(16)+"\n";
	str+="Status 6: "+status6.toString(16)+"\n";
	str+="Status 7: "+status7+"\n";
	str+="Status 8: "+status8+"\n";
	return str;
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