/**
 * New node file
 */

var response;

function MsgStreamSourceRegisterResponse(){
	
	this.setResponse = function setResponse(value){
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.write = function write(buffer) {	
		console.log("Response: "+response.toString(16));
		buffer.writeUInt16(response);
	};
	
	this.getSize = function getSize(){
		var size = 2;
		return size;
	};
};

MsgStreamSourceRegisterResponse.parse = function parse(buffer) {
	var message = new MsgStreamSourceRegisterResponse();
	message.setResponse(buffer.readUInt16());
	
	return message;
};

module.exports = MsgStreamSourceRegisterResponse;