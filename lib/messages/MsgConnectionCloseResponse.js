/**
 * New node file
 */
var validator = require('validator');

var response;

function MsgConnectionCloseResponse(){
	
	this.setResponse = function setResponse(value){
		if(!validator.isInt(value)){
			throw new Error("Response is not an integer!");
		}	
		if(!validator.isByteLength(value, 1, 1)){
			throw new Error("Response is out of range!");
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

MsgConnectionCloseResponse.parse = function parse(buffer) {
	var message = new MsgConnectionCloseResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};

module.exports = MsgConnectionCloseResponse;