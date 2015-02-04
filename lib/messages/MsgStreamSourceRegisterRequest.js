/**
 * New node file
 */
var validator = require('validator');

var sourceName;

function MsgStreamSourceRegisterRequest(){
	
	this.setSourceName = function setSourceName(value){
		if(!validator.isByteLength(value, 1, 255)){
			throw new Error("Source Name to long! Max length: 255");
		}
		if(!validator.isAlphanumeric(value)){
			throw new Error("Source Name not a String!");
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

MsgStreamSourceRegisterRequest.parse = function parse(buffer) {
	var message = new MsgStreamSourceRegisterRequest();
	message.setSourceName(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgStreamSourceRegisterRequest;