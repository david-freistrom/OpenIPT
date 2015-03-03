/**
 * New node file
 */

function MsgProtocolVersionResponse(){
	this.response = undefined;
};

MsgProtocolVersionResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgProtocolVersionResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgProtocolVersionResponse.prototype.write = function write(buffer) {
	buffer.writeUInt8(this.response);
};

MsgProtocolVersionResponse.prototype.getSize = function getSize(){
	return 1;
};

MsgProtocolVersionResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	return str;
};

MsgProtocolVersionResponse.parse = function parse(buffer) {
	var message = new MsgProtocolVersionResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};

module.exports = MsgProtocolVersionResponse;