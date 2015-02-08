/**
 * New node file
 */
var validator = require('validator');

function MsgDataTransferResponse(){
	this.response = undefined;
};

MsgDataTransferResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgDataTransferResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgDataTransferResponse.prototype.write = function write(buffer) {		
	buffer.writeUInt8(this.response);
};

MsgDataTransferResponse.prototype.getSize = function getSize(){
	return 1;
};

MsgDataTransferResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	return str;
};

MsgDataTransferResponse.parse = function parse(buffer) {
	var message = new MsgDataTransferResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};

module.exports = MsgDataTransferResponse;