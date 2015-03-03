
var Constants = require('../Constants');

function MsgTracerouteRequest(){
	this.response = undefined;
};


MsgTracerouteRequest.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgTracerouteRequest.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgTracerouteRequest.prototype.write = function write(buffer) {	
	buffer.writeUInt8(this.response);
};

MsgTracerouteRequest.prototype.getSize = function getSize(){
	return 1;
};

MsgTracerouteRequest.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	return str;
};

MsgTracerouteRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.TRACEROUTE_RESPONSE;
};

MsgTracerouteRequest.parse = function parse(buffer) {
	var message = new MsgTracerouteRequest();
	message.setResponse(buffer.readUInt8());
	
	return message;
};

module.exports = MsgTracerouteRequest;