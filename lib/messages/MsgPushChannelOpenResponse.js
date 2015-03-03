/**
 * New node file
 */

function MsgPushChannelOpenResponse(){
	this.response = undefined;
	this.channelNumber = undefined;
	this.dataSourceId = undefined;
	this.maxPacketSize = undefined;
	this.maxWindowSize = 0x01;
	this.status = 0x00;
	this.targetCount = undefined;
};

MsgPushChannelOpenResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgPushChannelOpenResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgPushChannelOpenResponse.prototype.setChannelNumber = function setChannelNumber(value){
	this.channelNumber = value;
};

MsgPushChannelOpenResponse.prototype.getChannelNumber = function getChannelNumber(){
	return this.channelNumber;
};

MsgPushChannelOpenResponse.prototype.setDataSourceId = function setDataSourceId(value){
	this.dataSourceId = value;
};

MsgPushChannelOpenResponse.prototype.getDataSourceId = function getDataSourceId(){
	return this.dataSourceId;
};

MsgPushChannelOpenResponse.prototype.setMaxPacketSize = function setMaxPacketSize(value){
	this.maxPacketSize = value;
};

MsgPushChannelOpenResponse.prototype.getMaxPacketSize = function getMaxPacketSize(){
	return this.maxPacketSize;
};

MsgPushChannelOpenResponse.prototype.setMaxWindowSize = function setMaxWindowSize(value){
	this.maxWindowSize = value;
};

MsgPushChannelOpenResponse.prototype.getMaxWindowSize = function getMaxWindowSize(){
	return this.maxWindowSize;
};

MsgPushChannelOpenResponse.prototype.setStatus = function setStatus(value){
	this.status = value;
};

MsgPushChannelOpenResponse.prototype.getStatus = function getStatus(){
	return this.status;
};

MsgPushChannelOpenResponse.prototype.setTargetCount = function setTargetCount(value){
	this.targetCount = value;
};

MsgPushChannelOpenResponse.prototype.getTargetCount = function getTargetCount(){
	return this.targetCount;
};

MsgPushChannelOpenResponse.prototype.write = function write(buffer) {
	buffer.writeUInt8(this.response);
	buffer.writeUInt32(this.channelNumber);
	buffer.writeUInt32(this.dataSourceId);
	buffer.writeUInt16(this.maxPacketSize);
	buffer.writeUInt8(this.maxWindowSize);
	buffer.writeUInt8(this.status);
	buffer.writeUInt32(this.targetCount);
};

MsgPushChannelOpenResponse.prototype.getSize = function getSize(){
	return 17;
};

MsgPushChannelOpenResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	str+="Channel-Number: "+this.channelNumber+"\n";
	str+="Data-Source-ID: "+this.dataSourceId+"\n";
	str+="Max Packet-Size: "+this.maxPacketSize+"\n";
	str+="Max Window-Size: "+this.maxWindowSize+"\n";
	str+="Status: "+this.status.toString(16)+"\n";
	str+="Target-Count: "+this.targetCount+"\n";
	
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