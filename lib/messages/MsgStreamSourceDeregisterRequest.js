/**
 * New node file
 */

var sourceName;

function MsgStreamSourceDeregisterRequest(){

	this.setSourceName = function setSourceName(value){
		sourceName = value;
	};
	
	this.getSourceName = function getSourceName(){
		return sourceName;
	};
	
	this.write = function write(buffer) {	
		console.log("SourceName: "+sourceName);
		buffer.writeUInt8String(sourceName);
	};
	
	this.getSize = function getSize(){
		var size = 0;
		size += sourceName.length;
		return size;
	};
};

MsgStreamSourceDeregisterRequest.parse = function parse(buffer) {
	var message = new MsgStreamSourceDeregisterRequest();
	message.setSourceName(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgStreamSourceDeregisterRequest;