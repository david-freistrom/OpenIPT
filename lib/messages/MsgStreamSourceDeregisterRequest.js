/**
 * New node file
 */
var validator = require('validator');

var sourceName;

function MsgStreamSourceDeregisterRequest(){

	this.setSourceName = function setSourceName(value){
		if(!validator.isByteLength(value, 1, 255)){
			throw new Error("Source-Name too long!");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Source-Name not a string!");
		}
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
		size += sourceName.length+1;
		return size;
	};
};

MsgStreamSourceDeregisterRequest.parse = function parse(buffer) {
	var message = new MsgStreamSourceDeregisterRequest();
	message.setSourceName(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgStreamSourceDeregisterRequest;