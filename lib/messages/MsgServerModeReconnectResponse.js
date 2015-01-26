/**
 * New node file
 */

var response;

function MsgServerModeReconnectResponse(){
	
	this.setResponse = function setResponse(value){
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.write = function write(buffer) {	
		console.log("Response: "+response.toString(16));
		buffer.writeUInt8(response);
	};
	
	this.getSize = function getSize(){
		var size = 1;
		return size;
	};
};

MsgServerModeReconnectResponse.parse = function parse(buffer) {
	var message = new MsgServerModeReconnectResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};

module.exports = MsgServerModeReconnectResponse;