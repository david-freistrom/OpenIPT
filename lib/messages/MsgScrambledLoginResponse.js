/**
 * New node file
 */

var response;
var reactionTime;
var newAddress;

function MsgScrambledLoginResponse(){
	
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
		size += newAddress.length;
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