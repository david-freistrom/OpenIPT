

function MsgStreamSourceDeregisterResponse(){
	this.response = undefined;
	this.sourceName = undefined;
};

MsgStreamSourceDeregisterResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgStreamSourceDeregisterResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgStreamSourceDeregisterResponse.prototype.setSourceName = function setSourceName(value){
	this.sourceName = value;
};

MsgStreamSourceDeregisterResponse.prototype.getSourceName = function getSourceName(){
	return this.sourceName;
};

MsgStreamSourceDeregisterResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8(this.response);
	buffer.writeUInt8String(this.sourceName);
};

MsgStreamSourceDeregisterResponse.prototype.getSize = function getSize(){
	return 1+this.sourceName.length+1;
};

MsgStreamSourceDeregisterResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.sourceName+"\n";
	str+="Source-Name: "+this.sourceName+"\n";
	return str;
};

MsgStreamSourceDeregisterResponse.parse = function parse(buffer) {
	var message = new MsgStreamSourceDeregisterResponse();
	message.setResponse(buffer.readUInt8());
	message.setSourceName(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgStreamSourceDeregisterResponse;