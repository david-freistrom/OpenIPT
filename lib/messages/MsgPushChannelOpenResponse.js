/**
 * New node file
 */
var validator = require('validator');

var response;
var channelNumber;
var dataSourceId;
var maxPacketSize;
var maxWindowSize;
var status;
var targetCount;

function MsgPushChannelOpenResponse(){
	response = undefined;
	channelNumber = undefined;
	dataSourceId = undefined;
	maxPacketSize = undefined;
	maxWindowSize = 0x01;
	status = 0x00;
	targetCount = undefined;
};

MsgPushChannelOpenResponse.prototype.setResponse = function setResponse(value){
//	
//	if(!validator.isInt(value)){
//		throw new Error("Response value not an integer!");
//	}	
//	if(value< 0x00 || value>0x03){
//		throw new Error("Unknown Response value!");
//	}
	
	response = value;
};

MsgPushChannelOpenResponse.prototype.getResponse = function getResponse(){
	return response;
};

MsgPushChannelOpenResponse.prototype.setChannelNumber = function setChannelNumber(value){
//	if(!validator.isInt(value)){
//		throw new Error("Channel-Number not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Channel-Number must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 4)){
//		throw new Error("Channel-Number out of range!");
//	}
	channelNumber = value;
};

MsgPushChannelOpenResponse.prototype.getChannelNumber = function getChannelNumber(){
	return channelNumber;
};

MsgPushChannelOpenResponse.prototype.setDataSourceId = function setDataSourceId(value){
//	if(!validator.isInt(value)){
//		throw new Error("Data-Source-ID not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Data-Source-ID must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 4)){
//		throw new Error("Data-Source-ID out of range!");
//	}
	dataSourceId = value;
};

MsgPushChannelOpenResponse.prototype.getDataSourceId = function getDataSourceId(){
	return dataSourceId;
};

MsgPushChannelOpenResponse.prototype.setMaxPacketSize = function setMaxPacketSize(value){
//	if(!validator.isInt(value)){
//		throw new Error("Max-Packet-Size not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Max-Packet-Size must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 2)){
//		throw new Error("Max-Packet-Size out of range!");
//	}
	maxPacketSize = value;
};

MsgPushChannelOpenResponse.prototype.getMaxPacketSize = function getMaxPacketSize(){
	return maxPacketSize;
};

MsgPushChannelOpenResponse.prototype.setMaxWindowSize = function setMaxWindowSize(value){
//	if(!validator.isInt(value)){
//		throw new Error("Max-Window-Size not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Max-Window-Size must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 1)){
//		throw new Error("Max-Window-Size out of range!");
//	}
	maxWindowSize = value;
};

MsgPushChannelOpenResponse.prototype.getMaxWindowSize = function getMaxWindowSize(){
	return maxWindowSize;
};

MsgPushChannelOpenResponse.prototype.setStatus = function setStatus(value){
//	if(!validator.isInt(value)){
//		throw new Error("Status not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Status must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 1)){
//		throw new Error("Status out of range!");
//	}
	status = value;
};

MsgPushChannelOpenResponse.prototype.getStatus = function getStatus(){
	return status;
};

MsgPushChannelOpenResponse.prototype.setTargetCount = function setTargetCount(value){
//	if(!validator.isInt(value)){
//		throw new Error("Target-Count not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Target-Count must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 4)){
//		throw new Error("Target-Count out of range!");
//	}
	targetCount = value;
};

MsgPushChannelOpenResponse.prototype.getTargetCount = function getTargetCount(){
	return targetCount;
};

MsgPushChannelOpenResponse.prototype.write = function write(buffer) {
	buffer.writeUInt8(response);
	buffer.writeUInt32(channelNumber);
	buffer.writeUInt32(dataSourceId);
	buffer.writeUInt16(maxPacketSize);
	buffer.writeUInt8(maxWindowSize);
	buffer.writeUInt8(status);
	buffer.writeUInt32(targetCount);
};

MsgPushChannelOpenResponse.prototype.getSize = function getSize(){
	var size = 17;
	return size;
};

MsgPushChannelOpenResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+response.toString(16)+"\n";
	str+="Channel-Number: "+channelNumber+"\n";
	str+="Data-Source-ID: "+dataSourceId+"\n";
	str+="Max Packet-Size: "+maxPacketSize+"\n";
	str+="Max Window-Size: "+maxWindowSize+"\n";
	str+="Status: "+status.toString(16)+"\n";
	str+="Target-Count: "+targetCount+"\n";
	return str;
};

MsgPushChannelOpenResponse.parse = function parse(buffer) {
	var message = new MsgPushChannelOpenResponse();
	message.setResponse(buffer.readUInt8());
	message.setChannelNumber(buffer.readUInt32());
	message.setDataSourceId(buffer.readUInt32());
	message.setMaxPacketSize(buffer.readUInt16());
	message.setMaxWindowSize(buffer.readUInt8());
	message.setStatus(buffer.readUInt8());
	message.setTargetCount(buffer.readUInt32());
	
	return message;
};

module.exports = MsgPushChannelOpenResponse;