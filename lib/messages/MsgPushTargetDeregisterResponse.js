/**
 * New node file
 */
var validator = require('validator');

var response;
var targetName;

function MsgPushTargetDeregisterResponse(){
	
	this.setResponse = function setResponse(value){
		if(!validator.isInt(value)){
			throw new Error("Response value not an Integer!");
		}	
		if(value<0x00 || value>0x01){
			throw new Error("Unknown Response value!");
		}
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.setTargetName = function setTargetName(value){
		if(!validator.isIAlphanumeric(value)){
			throw new Error("Target-Name not a String!");
		}	
		if(!validator.isByteLength(value, 0, 255)){
			throw new Error("Target-Name too long!");
		}
		targetName = value;
	};
	
	this.getTargetName = function getTargetName(){
		return targetName;
	};
	
	this.write = function write(buffer) {
		console.log("Response: "+response.toString(16));
		console.log("Target Name: "+targetName);
		
		buffer.writeUInt8(response);
		buffer.writeUInt8String(targetName);
	};
	
	this.getSize = function getSize(){
		var size = 1;
		size += targetName.length+1;
		return size;
	};
};

MsgPushTargetDeregisterResponse.parse = function parse(buffer) {
	var message = new MsgPushTargetDeregisterResponse();
	message.setResponse(buffer.readUInt8());
	message.setTargetName(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgPushTargetDeregisterResponse;