/**
 * New node file
 */
var validator = require('validator');

var response;
var sourceName;

function MsgStreamSourceDeregisterResponse(){

	this.setResponse = function setResponse(value){
		
		if(!validator.isInt(value)){
			throw new Error("Response value not an integer!");
		}	
		if(value< 0x00 || value>0x01){
			throw new Error("Unknown Response value!");
		}
		
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.setSourceName = function setSourceName(value){
		if(!validator.isByteLength(value, 1, 255)){
			throw new Error("Source-Name too long!");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Source-Name not a string!");
		}
		sourceName = value;
	};
	
	this.getSourceName = function getSourceName(){
		return sourceName;
	};
	
	this.write = function write(buffer) {	
		console.log("Response: "+response.toString(16));
		console.log("Source Name: "+sourceName);
		
		buffer.writeUInt8(response);
		buffer.writeUInt8String(sourceName);
	};
	
	this.getSize = function getSize(){
		var size = 1;
		size += sourceName.length+1;
		return size;
	};
};

MsgStreamSourceDeregisterResponse.parse = function parse(buffer) {
	var message = new MsgStreamSourceDeregisterResponse();
	message.setResponse(buffer.readUInt8());
	message.setSourceName(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgStreamSourceDeregisterResponse;