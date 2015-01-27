/**
 * New node file
 */

var response;
var streamNumber;

function MsgStreamChannelCloseResponse(){

	this.setResponse = function setResponse(value){
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.setStreamNumber = function setStreamNumber(value){
		streamNumber = value;
	};
	
	this.getStreamNumber = function getStreamNumber(){
		return streamNumber;
	};
	
	this.write = function write(buffer) {	
		console.log("Response: "+response.toString(16));
		console.log("Stream Number: "+streamNumber.toString(16));
		
		buffer.writeUInt8(response);
		buffer.writeUInt32(streamNumber);
	};
	
	this.getSize = function getSize(){
		var size = 5;
		return size;
	};
};

MsgStreamChannelCloseResponse.parse = function parse(buffer) {
	var message = new MsgStreamChannelCloseResponse();
	message.setResponser(buffer.readUInt8());
	message.setStreamNumber(buffer.readUInt32());
	
	return message;
};
module.exports = MsgStreamChannelCloseResponse;