

function MsgServerModeResponse(){
	this.response = undefined;
	this.waitTime = undefined;
};

MsgServerModeResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgServerModeResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgServerModeResponse.prototype.setWaitTime = function setWaitTime(value){
	this.waitTime = value;
};

MsgServerModeResponse.prototype.getWaitTime = function getWaitTime(){
	return this.waitTime;
};

MsgServerModeResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8(this.response);
	buffer.writeUInt16(this.waitTime);
};

MsgServerModeResponse.prototype.getSize = function getSize(){
	return 3;
};

MsgServerModeResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	str+="Wait-Time: "+this.waitTime.toString(16)+"\n";
	return str;
};

MsgServerModeResponse.parse = function parse(buffer) {
	var message = new MsgServerModeResponse();
	message.setResponse(buffer.readUInt8());
	message.setWaitTime(buffer.readUInt16());
	
	return message;
};

module.exports = MsgServerModeResponse;