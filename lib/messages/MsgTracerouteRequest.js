/**
 * New node file
 */
var validator = require('validator');

var response;

function MsgTracerouteRequest(){
	response = undefined;
};


MsgTracerouteRequest.prototype.setResponse = function setResponse(value){

	if(!validator.isInt(value)){
		throw new Error("Response value not an integer!");
	}	
	if(value< 0x01 || value>0x03){
		throw new Error("Unknown Response value!");
	}
	response = value;
};

MsgTracerouteRequest.prototype.getResponse = function getResponse(){
	return response;
};

MsgTracerouteRequest.prototype.write = function write(buffer) {	
	console.log("Response: "+response.toString(16));
	buffer.writeUInt8(response);
};

MsgTracerouteRequest.prototype.getSize = function getSize(){
	var size = 1;
	return size;
};

MsgTracerouteRequest.parse = function parse(buffer) {
	var message = new MsgTracerouteRequest();
	message.setResponse(buffer.readUInt8());
	
	return message;
};

module.exports = MsgTracerouteRequest;