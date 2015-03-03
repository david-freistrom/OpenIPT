

function MsgStreamSourceRegisterResponse(){
	this.response = undefined;
};

MsgStreamSourceRegisterResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgStreamSourceRegisterResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgStreamSourceRegisterResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8(this.response);
};

MsgStreamSourceRegisterResponse.prototype.getSize = function getSize(){
	return 1;
};

MsgStreamSourceRegisterResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	return str;
};

MsgStreamSourceRegisterResponse.parse = function parse(buffer) {
	var message = new MsgStreamSourceRegisterResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};

module.exports = MsgStreamSourceRegisterResponse;