/**
 * New node file
 */
var validator = require('validator');

var response;
var reactionTime;
var newAddress;

function MsgScrambledLoginResponse(){
	
	this.setResponse = function setResponse(value){
		
		if(!validator.isInt(value)){
			throw new Error("Response is not an integer!");
		}	
		if(value<0){
			throw new Error("Response must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 1)){
			throw new Error("Response is out of range!");
		}
		
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.setReactionTime = function setReactionTime(value){
		if(!validator.isInt(value)){
			throw new Error("Reaction Time is not an integer!");
		}	
		if(value<0){
			throw new Error("Reaction Time must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 2)){
			throw new Error("Reaction Time out of range!");
		}
		reactionTime = value;
	};
	
	this.getReactionTime = function getReactionTime(){
		return reactionTime;
	};
	
	this.setNewAddress = function setNewAddress(value){
		if(!validator.isByteLength(value, 0, 255)){
			throw new Error("Account to long! Max length: 255");
		}
		if(!validator.isIP(value)){
			throw new Error("Account not a IP!");
		}
		newAddress = value;
	};
	
	this.getNewAddress = function getNewAddress(){
		return newAddress;
	};
	
	this.write = function write(buffer) {
		console.log("Response: "+response.toString(16));
		console.log("Reaction Time: "+reactionTime.toString(16));
		console.log("New Address: "+newAddress.toString(16));
		
		buffer.writeUInt8(response);
		buffer.writeUInt16(reactionTime);
		buffer.writeUInt8String(newAddress);
	};
	
	this.getSize = function getSize(){
		var size = 3;
		size += newAddress.length+1;
		return size;
	};
};

MsgScrambledLoginResponse.parse = function parse(buffer) {
	var message = new MsgScrambledLoginResponse();
	message.setResponse(buffer.readUInt8());
	message.setReactionTime(buffer.readUInt16());
	message.setNewAddress(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgScrambledLoginResponse;