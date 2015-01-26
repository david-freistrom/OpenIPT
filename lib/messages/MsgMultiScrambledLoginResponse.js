/**
 * New node file
 */

var response;
var reactionTime;
var newAddress;
var countConfirmed;

function MsgMultiScrambledLoginResponse(){
	
	this.setResponse = function setResponse(value){
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
		
	this.setReactionTime = function setReactionTime(value){
		reactionTime = value;
	};
	
	this.getReactionTime = function getReactionTime(){
		return reactionTime;
	};
	
	this.setNewAddress = function setNewAddress(value){
		newAddress = value;
	};
	
	this.getNewAddress = function getNewAddress(){
		return newAddress;
	};
	
	this.setCountConfirmed = function setCountConfirmed(value){
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
		size += newAddress.length;
		return size;
	};
};

MsgMultiScrambledLoginResponse.parse = function parse(buffer) {
	var message = new MsgMultiScrambledLoginResponse();
	message.setResponse(buffer.readUInt8());
	message.setReactionTime(buffer.readUInt16());
	message.setNewAddress(buffer.readUInt8String());
	message.setCountConfirmed(buffer.readUInt16());
	
	return message;
};

module.exports = MsgMultiScrambledLoginResponse;