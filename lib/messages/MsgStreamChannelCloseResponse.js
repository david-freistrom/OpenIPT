

function MsgStreamChannelCloseResponse(){
	this.response = undefined;
	this.streamNumber = undefined;
};

MsgStreamChannelCloseResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgStreamChannelCloseResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgStreamChannelCloseResponse.prototype.setStreamNumber = function setStreamNumber(value){
	this.streamNumber = value;
};

MsgStreamChannelCloseResponse.prototype.getStreamNumber = function getStreamNumber(){
	return this.streamNumber;
};

MsgStreamChannelCloseResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8(this.response);
	buffer.writeUInt32(this.streamNumber);
};

MsgStreamChannelCloseResponse.prototype.getSize = function getSize(){
	return 5;
};

MsgStreamChannelCloseResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	str+="Stream-Number: "+this.streamNumber.toString(16)+"\n";
	return str;
};

MsgStreamChannelCloseResponse.parse = function parse(buffer) {
	var message = new MsgStreamChannelCloseResponse();
	message.setResponse(buffer.readUInt8());
	message.setStreamNumber(buffer.readUInt32());
	
	return message;
};

module.exports = MsgStreamChannelCloseResponse;