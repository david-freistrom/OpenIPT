

function MsgTracerouteResponse(){
	this.response = undefined;
};


MsgTracerouteResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgTracerouteResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgTracerouteResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8(this.response);
};

MsgTracerouteResponse.prototype.getSize = function getSize(){
	return 1;
};

MsgTracerouteResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	return str;
};

MsgTracerouteResponse.parse = function parse(buffer) {
	var message = new MsgTracerouteResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};

module.exports = MsgTracerouteResponse;