/**
 * New node file
 */
var validator = require('validator');

var response;

function MsgTracerouteResponse(){
	
	this.setResponse = function setResponse(value){
		
		if(!validator.isInt(value)){
			throw new Error("Response is not an integer!");
		}	
		if(value< 0x01 || value>0x03){
			throw new Error("Response value not defined! Allowed values are 0x01, 0x02, 0x03. See documentation for details.");
		}
		
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.write = function write(buffer) {	
		console.log("Response: "+response.toString(16));
		buffer.writeUInt8(response);
	};
	
	this.getSize = function getSize(){
		var size = 1;
		return size;
	};
};

MsgTracerouteResponse.parse = function parse(buffer) {
	var message = new MsgTracerouteResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};
module.exports = MsgTracerouteResponse;