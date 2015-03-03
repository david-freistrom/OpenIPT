

function MsgStreamChannelOpenResponse(){
	this.response = undefined;
	this.streamNumber = undefined;
	this.maxPacketSize = undefined;
	this.maxWindowSize = undefined;
	this.status = undefined;
};

MsgStreamChannelOpenResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgStreamChannelOpenResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgStreamChannelOpenResponse.prototype.setStreamNumber = function setStreamNumber(value){
	this.streamNumber = value;
};

MsgStreamChannelOpenResponse.prototype.getStreamNumber = function getStreamNumber(){
	return this.streamNumber;
};

MsgStreamChannelOpenResponse.prototype.setMaxPacketSize = function setMaxPacketSize(value){
	this.maxPacketSize = value;
};

MsgStreamChannelOpenResponse.prototype.getMaxPacketSize = function getMaxPacketSize(){
	return this.maxPacketSize;
};

MsgStreamChannelOpenResponse.prototype.setMaxWindowSize = function setMaxWindowSize(value){
	this.maxWindowSize = value;
};

MsgStreamChannelOpenResponse.prototype.getMaxWindowSize = function getMaxWindowSize(){
	return this.maxWindowSize;
};

MsgStreamChannelOpenResponse.prototype.setStatus = function setStatus(value){
	this.status = value;
};

MsgStreamChannelOpenResponse.prototype.getStatus = function getStatus(){
	return this.status;
};

MsgStreamChannelOpenResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8(this.response);
	buffer.writeUInt32(this.streamNumber);
	buffer.writeUInt16(this.maxPacketSize);
	buffer.writeUInt8(this.maxWindowSize);
	buffer.writeUInt8(this.status);
};

MsgStreamChannelOpenResponse.prototype.getSize = function getSize(){
	return 11;
};

MsgStreamChannelOpenResponse.prototype.toString = function toString(){
	var str = "";
	str+="Source-Name: "+this.sourceName+"\n";
	str+="Stream-Number: "+this.streamNumber.toString(16)+"\n";
	str+="ACK-Timeout: "+this.ackTimeout.toString(16)+"\n";
	str+="Max Packet-Size: "+this.maxPacketSize.toString(16)+"\n";
	str+="Max Window-Size: "+this.maxWindowSize.toString(16)+"\n";	
	str+="Status: "+this.status.toString(16)+"\n";
	return str;
};

MsgStreamChannelOpenResponse.parse = function parse(buffer) {
	var message = new MsgStreamChannelOpenResponse();
	message.setSourceName(buffer.readUInt8());
	message.setStreamNumber(buffer.readUInt32());
	message.setMaxPacketSize(buffer.readUInt16());
	message.setMaxWindowSize(buffer.readUInt8());
	message.setStatus(buffer.readUInt8());
	
	return message;
};

module.exports = MsgStreamChannelOpenResponse;