/**
 * New node file
 */

var sourceName;

function MsgStreamSourceRegisterRequest(){
	
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

MsgStreamSourceRegisterRequest.parse = function parse(buffer) {
	var message = new MsgStreamSourceRegisterRequest();
	message.setSourceName(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgStreamSourceRegisterRequest;