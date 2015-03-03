/**
 * New node file
 */
function MsgConnectionCloseResponse(){
	this.response = undefined;
};

MsgConnectionCloseResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgConnectionCloseResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgConnectionCloseResponse.prototype.write = function write(buffer) {
	buffer.writeUInt8(this.response);
};

MsgConnectionCloseResponse.prototype.getSize = function getSize(){
	return 1;
};

MsgConnectionCloseResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	return str;
};

MsgConnectionCloseResponse.parse = function parse(buffer) {
	var message = new MsgConnectionCloseResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};

module.exports = MsgConnectionCloseResponse;