

function MsgPushTargetRegisterResponse(){
	this.response = undefined;
	this.channelNumber = undefined;
};

MsgPushTargetRegisterResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgPushTargetRegisterResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgPushTargetRegisterResponse.prototype.setChannelNumber = function setChannelNumber(value){
	this.channelNumber = value;
};

MsgPushTargetRegisterResponse.prototype.getChannelNumber = function getChannelNumber(){
	return this.channelNumber;
};

MsgPushTargetRegisterResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8(this.response);
	buffer.writeUInt32(this.channelNumber);
};

MsgPushTargetRegisterResponse.prototype.getSize = function getSize(){
	return 5;
};

MsgPushTargetRegisterResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	str+="Channel-Number: "+this.channelNumber.toString(16)+"\n";
	return str;
};

MsgPushTargetRegisterResponse.parse = function parse(buffer) {
	var message = new MsgPushTargetRegisterResponse();
	message.setResponse(buffer.readUInt8());
	message.setChannelNumber(buffer.readUInt32());
	
	return message;
};

module.exports = MsgPushTargetRegisterResponse;