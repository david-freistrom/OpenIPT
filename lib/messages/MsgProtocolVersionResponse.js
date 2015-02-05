/**
 * New node file
 */
var validator = require('validator');

var response;

function MsgProtocolVersionResponse(){
	
	this.setResponse = function setResponse(value){
		if(!validator.isInt(value)){
			throw new Error("Response value not an integer!");
		}	
		if(value<0){
			throw new Error("Response value must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 1)){
			throw new Error("Response value out of range!");
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

MsgProtocolVersionResponse.parse = function parse(buffer) {
	var message = new MsgProtocolVersionResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};


module.exports = MsgProtocolVersionResponse;