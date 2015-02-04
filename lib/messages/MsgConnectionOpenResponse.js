/**
 * New node file
 */
var validator = require('validator');

var response;

function MsgConnectionOpenResponse(){

	this.setResponse = function setResponse(value){
		
		if(!validator.isInt(value)){
			throw new Error("Response is not an integer!");
		}	
		if(!validator.isByteLength(value, 1, 1)){
			throw new Error("Response is out of range!");
		}
		if(value< 0x00 || value>0x05){
			throw new Error("Response value not defined! Allowed values are 0x00 - 0x05. See documentation for details.");
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

MsgConnectionOpenResponse.parse = function parse(buffer) {
	var message = new MsgConnectionOpenResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};

module.exports = MsgConnectionOpenResponse;