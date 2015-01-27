/**
 * New node file
 */

var response;
var waitTime;

function MsgServerModeResponse(){

	this.setResponse = function setResponse(value){
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.setWaitTime = function setWaitTime(value){
		waitTime = value;
	};
	
	this.getWaitTime = function getWaitTime(){
		return waitTime;
	};
	
	this.write = function write(buffer) {	
		console.log("Response: "+response.toString(16));
		console.log("Wait Time: "+waitTime.toString(16));
		
		buffer.writeUInt8(response);
		buffer.writeUInt16(waitTime);
	};
	
	this.getSize = function getSize(){
		var size = 3;
		return size;
	};
};

MsgServerModeResponse.parse = function parse(buffer) {
	var message = new MsgServerModeResponse();
	message.setResponse(buffer.readUInt8());
	message.setWaitTime(buffer.readUInt16());
	
	return message;
};

module.exports = MsgServerModeResponse;