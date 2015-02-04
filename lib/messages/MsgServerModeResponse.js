/**
 * New node file
 */
var validator = require('validator');

var response;
var waitTime;

function MsgServerModeResponse(){

	this.setResponse = function setResponse(value){
		
		if(!validator.isInt(value)){
			throw new Error("Response is not an integer!");
		}	
		if(value< 0x00 || value>0x03){
			throw new Error("Response value not defined! Allowed values are 0x00, 0x01, 0x02, 0x03. See documentation for details.");
		}
		
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.setWaitTime = function setWaitTime(value){
		if(!validator.isInt(value)){
			throw new Error("Wait Time is not an integer!");
		}	
		if(value<0){
			throw new Error("Wait Time must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 2)){
			throw new Error("Wait Time out of range!");
		}
		waitTime = value;
	};
	
	this.getWaitTime = function getWaitTime(){
		return waitTime;
	};
	
	this.write = function write(buffer) {	
		console.log("Response: "+response.toString(16));
		console.log("Wait Time: "+waitTime.toString(16));
		
		buffer.writeUInt8(response);
		buffer.writeUInt16(waitTime);
	};
	
	this.getSize = function getSize(){
		var size = 3;
		return size;
	};
};

MsgServerModeResponse.parse = function parse(buffer) {
	var message = new MsgServerModeResponse();
	message.setResponse(buffer.readUInt8());
	message.setWaitTime(buffer.readUInt16());
	
	return message;
};

module.exports = MsgServerModeResponse;