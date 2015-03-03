/**
 * New node file
 */

function MsgMaintenanceResponse(){
	this.response = undefined;
};

MsgMaintenanceResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgMaintenanceResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgMaintenanceResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8(this.response);
};

MsgMaintenanceResponse.prototype.getSize = function getSize(){
	return 1;
};

MsgMaintenanceResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	
	return str;
};

MsgMaintenanceResponse.parse = function parse(buffer) {
	var message = new MsgMaintenanceResponse();
	message.setResponse(buffer.readUInt8());
	
	return message;
};

module.exports = MsgMaintenanceResponse;