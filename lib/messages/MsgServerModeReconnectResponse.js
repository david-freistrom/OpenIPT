
function MsgServerModeReconnectResponse(){
	this.response = undefined;
};

MsgServerModeReconnectResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgServerModeReconnectResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgServerModeReconnectResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8(this.response);
};

MsgServerModeReconnectResponse.prototype.getSize = function getSize(){
	return 1;
};

MsgServerModeReconnectResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	return str;
};

MsgServerModeReconnectResponse.parse = function parse(buffer) {
	var message = new MsgServerModeReconnectResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};

module.exports = MsgServerModeReconnectResponse;