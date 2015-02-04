/**
 * New node file
 */
var validator = require('validator');

var response;
var reactionTime;
var newAddress;
var countConfirmed;

function MsgMultiPublicLoginResponse(){
	
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
	
	this.getReactionTime = function getReactionTime(){
		return reactionTime;
	};
	
	this.setNewAddress = function setNewAddress(value){
		if(!validator.isIP(value)){
			throw new Error("New Address is not an IP!");
		}	
		if(!validator.isByteLength(value, 0, 255)){
			throw new Error("New Address is out of range!");
		}
		
		newAddress = value;
	};
	
	this.getNewAddress = function getNewAddress(){
		return newAddress;
	};
	
	this.setCountConfirmed = function setCountConfirmed(value){
		if(!validator.isInt(value)){
			throw new Error("Response is not an integer!");
		}	
		if(value<0){
			throw new Error("Response must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 2)){
			throw new Error("Count Confirmed is out of range!");
		}
		countConfirmed = value;
	};
	
	this.getCountConfirmed = function getCountConfirmed(){
		return countConfirmed;
	};
	
	
	this.write = function write(buffer) {	
		console.log("Response: "+response.toString(16));
		console.log("Reaction Time: "+reactionTime.toString(16));
		console.log("New Address: "+newAddress);
		console.log("Count Confirmed: "+countConfirmed.toString(16));
		
		buffer.writeUInt8(response);
		buffer.writeUInt16(reactionTime);
		buffer.writeUInt8String(newAddress);
		buffer.writeUInt16(countConfirmed);
	};
	
	this.getSize = function getSize(){
		var size = 5;
		size += newAddress.length+1;
		return size;
	};
};

MsgMultiPublicLoginResponse.parse = function parse(buffer) {
	var message = new MsgMultiPublicLoginResponse();
	message.setResponse(buffer.readUInt8());
	message.setReactionTime(buffer.readUInt16());
	message.setNewAddress(buffer.readUInt8String());
	message.setCountConfirmed(buffer.readUInt16());
	
	return message;
};

module.exports = MsgMultiPublicLoginResponse;