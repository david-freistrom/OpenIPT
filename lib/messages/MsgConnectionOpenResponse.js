/**
 * New node file
 */
function MsgConnectionOpenResponse(){
	this.response = undefined;
};

MsgConnectionOpenResponse.prototype.setResponse = function setResponse(value){	
	this.response = value;
};

MsgConnectionOpenResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgConnectionOpenResponse.prototype.write = function write(buffer) {
	buffer.writeUInt8(this.response);
};

MsgConnectionOpenResponse.prototype.getSize = function getSize(){
	return 1;
};

MsgConnectionOpenResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	return str;
};

MsgConnectionOpenResponse.parse = function parse(buffer) {
	var message = new MsgConnectionOpenResponse();
	message.setResponse(buffer.readUInt8());
	return message;
};

module.exports = MsgConnectionOpenResponse;