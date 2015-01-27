/**
 * New node file
 */

var response;
var sourceName;

function MsgStreamSourceDeregisterResponse(){

	this.setResponse = function setResponse(value){
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.setSourceName = function setSourceName(value){
		sourceName = value;
	};
	
	this.getSourceName = function getSourceName(){
		return sourceName;
	};
	
	this.write = function write(buffer) {	
		console.log("Response: "+response.toString(16));
		console.log("Source Name: "+sourceName);
		
		buffer.writeUInt8(response);
		buffer.writeUInt8String(sourceName);
	};
	
	this.getSize = function getSize(){
		var size = 1;
		size += sourceName.length;
		return size;
	};
};

MsgStreamSourceDeregisterResponse.parse = function parse(buffer) {
	var message = new MsgStreamSourceDeregisterResponse();
	message.setResponse(buffer.readUInt8());
	message.setSourceName(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgStreamSourceDeregisterResponse;