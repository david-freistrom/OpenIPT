/**
 * New node file
 */

var response;
var reactionTime;
var newAddress;

function MsgPublicLoginResponse(){
	
	this.setResponse = function setResponse(value){
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.setReactionTime = function setReactionTime(value){
		reactionTime = value;
	};
	
	this.getReactionTime = function getPassword(){
		return reactionTime;
	};
	
	this.setNewAddress = function setNewAddress(value){
		newAddress = value;
	};
	
	this.getNewAddress = function getNewAddress(){
		newAddress;
	};
	
	this.write = function write(buffer) {		
		console.log("Response: "+response.toString(16));
		console.log("ReactionTime: "+reactionTime.toString(16));
		console.log("New Address: "+newAddress);
		
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

MsgPublicLoginResponse.parse = function parse(buffer) {
	var message = new MsgPublicLoginResponse();
	message.setResponse(buffer.readUInt8());
	message.setReactionTime(buffer.readUInt16());
	message.setNewAddress(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgPublicLoginResponse;
