/**
 * New node file
 */
var validator = require('validator');

function MsgNetworkStatusResponse(){
	this.deviceType = undefined;
	this.status1 = undefined;
	this.status2 = undefined;
	this.status3 = undefined;
	this.status4 = undefined;
	this.status5 = undefined;
	this.status6 = undefined;
	this.status7 = undefined;
};

MsgNetworkStatusResponse.prototype.setDeviceType = function setDeviceType(value){
	this.deviceType = value;
};

MsgNetworkStatusResponse.prototype.getDeviceType = function getDeviceType(){
	return this.deviceType;
};

MsgNetworkStatusResponse.prototype.setStatus1 = function setStatus1(value){
	this.status1 = value;
};

MsgNetworkStatusResponse.prototype.getStatus1 = function getStatus1(){
	return this.status1;
};

MsgNetworkStatusResponse.prototype.setStatus2 = function setStatus2(value){
	this.status2 = value;
};

MsgNetworkStatusResponse.prototype.getStatus2 = function getStatus2(){
	return this.status2;
};

MsgNetworkStatusResponse.prototype.setStatus3 = function setStatus3(value){
	this.status3 = value;
};

MsgNetworkStatusResponse.prototype.getStatus3 = function getStatus3(){
	return this.status3;
};

MsgNetworkStatusResponse.prototype.setStatus4 = function setStatus4(value){
	this.status4 = value;
};

MsgNetworkStatusResponse.prototype.getStatus4 = function getStatus4(){
	return this.status4;
};

MsgNetworkStatusResponse.prototype.setStatus5 = function setStatus5(value){
	this.status5 = value;
};

MsgNetworkStatusResponse.prototype.getStatus5 = function getStatus5(){
	return this.status5;
};

MsgNetworkStatusResponse.prototype.setStatus6 = function setStatus6(value){
	this.status6 = value;
};

MsgNetworkStatusResponse.prototype.getStatus6 = function getStatus6(){
	return this.status6;
};

MsgNetworkStatusResponse.prototype.setStatus7 = function setStatus7(value){
	this.status7 = value;
};

MsgNetworkStatusResponse.prototype.getStatus7 = function getStatus7(){
	return this.status7;
};

MsgNetworkStatusResponse.prototype.write = function write(buffer) {		
	buffer.writeUInt8(this.deviceType);
	buffer.writeUInt32(this.status1);
	buffer.writeUInt32(this.status2);
	buffer.writeUInt32(this.status3);
	buffer.writeUInt32(this.status4);
	buffer.writeUInt32(this.status5);
	buffer.writeUInt8String(this.status6);
	buffer.writeUInt8String(this.status7);
};

MsgNetworkStatusResponse.prototype.getSize = function getSize(){
	var size = 21;
	size += this.status6.length+1;
	size += this.status7.length+1;
	return size;
};

MsgNetworkStatusResponse.prototype.toString = function toString(){
	var str = "";
	str+="Device-Type: "+this.deviceType.toString(16)+"\n";
	str+="Status 1: "+this.status1.toString(16)+"\n";
	str+="Status 2: "+this.status2.toString(16)+"\n";
	str+="Status 3: "+this.status3.toString(16)+"\n";
	str+="Status 4: "+this.status4.toString(16)+"\n";
	str+="Status 5: "+this.status5.toString(16)+"\n";
	str+="Status 6: "+this.status6.toString(16)+"\n";
	str+="Status 7: "+this.status7+"\n";
	str+="Status 8: "+this.status8+"\n";
	
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