/**
 * New node file
 */
var validator = require('validator');

var response;
var reactionTime;
var newAddress;

function MsgPublicLoginResponse(){
	
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
			throw new Error("Reaction Time is out of range!");
		}
		reactionTime = value;
	};
	
	this.getReactionTime = function getPassword(){
		return reactionTime;
	};
	
	this.setNewAddress = function setNewAddress(value){
		if(!validator.isAlphanumeric(value)){
			throw new Error("New Address is not a String!");
		}	
		if(!validator.isIP(value)){
			throw new Error("New Address is not an IP!");
		}	
		newAddress = value;
	};
	
	this.getNewAddress = function getNewAddress(){
		newAddress;
	};
	
	this.write = function write(buffer) {
		console.log("Response: "+response.toString(16));
		console.log("ReactionTime: "+reactionTime);
		console.log("New Address: "+newAddress);
		
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

MsgPublicLoginResponse.parse = function parse(buffer) {
	var message = new MsgPublicLoginResponse();
	message.setResponse(buffer.readUInt8());
	message.setReactionTime(buffer.readUInt16());
	message.setNewAddress(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgPublicLoginResponse;
