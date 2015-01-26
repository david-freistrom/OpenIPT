/**
 * New node file
 */

var response;
var channelNumber;

function MsgPushTargetRegisterResponse(){
	
	this.setResponse = function setResponse(value){
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.setChannelNumber = function setChannelNumber(value){
		channelNumber = value;
	};
	
	this.getChannelNumber = function getChannelNumber(){
		return channelNumber;
	};
	
	this.write = function write(buffer) {	
		console.log("Response: "+response.toString(16));
		console.log("Channel Number: "+channelNumber.toString(16));
		
		buffer.writeUInt8(response);
		buffer.writeUInt32(channelNumber);
	};
	
	this.getSize = function getSize(){
		var size = 5;
		return size;
	};
};

MsgPushTargetRegisterResponse.parse = function parse(buffer) {
	var message = new MsgPushTargetRegisterResponse();
	message.setResponse(buffer.readUInt8());
	message.setChannelNumber(buffer.readUInt32());
	
	return message;
};

module.exports = MsgPushTargetRegisterResponse;