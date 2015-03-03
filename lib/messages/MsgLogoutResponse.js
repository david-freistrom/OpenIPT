/**
 * New node file
 */

function MsgLogoutResponse(){
	this.response = undefined;
};

MsgLogoutResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgLogoutResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgLogoutResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8(this.response);
};

MsgLogoutResponse.prototype.getSize = function getSize(){
	return 1;
};

MsgLogoutResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	return str;
};

MsgLogoutResponse.parse = function parse(buffer) {
	var message = new MsgLogoutResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};

module.exports = MsgLogoutResponse;