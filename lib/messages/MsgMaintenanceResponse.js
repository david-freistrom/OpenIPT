/**
 * New node file
 */
var validator = require('validator');

var response;

function MsgMaintenanceResponse(){
	response = undefined;
};

MsgMaintenanceResponse.prototype.setResponse = function setResponse(value){
	
	if(!validator.isInt(value)){
		throw new Error("Response value not an integer!");
	}	
	if(value!=0x01){
		throw new Error("Unknown Response value!");
	}
	
	response = value;
};

MsgMaintenanceResponse.prototype.getResponse = function getResponse(){
	return response;
};

MsgMaintenanceResponse.prototype.write = function write(buffer) {	
	console.log("Response: "+response.toString(16));
	buffer.writeUInt8(response);
};

MsgMaintenanceResponse.prototype.getSize = function getSize(){
	var size = 1;
	return size;
};


MsgMaintenanceResponse.parse = function parse(buffer) {
	var message = new MsgMaintenanceResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};


module.exports = MsgMaintenanceResponse;