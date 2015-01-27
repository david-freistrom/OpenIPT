/**
 * New node file
 */

var response;

function MsgTracerouteResponse(){
	
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

MsgTracerouteResponse.parse = function parse(buffer) {
	var message = new MsgTracerouteResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};
module.exports = MsgTracerouteResponse;