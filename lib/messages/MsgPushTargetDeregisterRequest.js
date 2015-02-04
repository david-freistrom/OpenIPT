/**
 * New node file
 */
var validator = require('validator');

var targetName;

function MsgPushTargetDeregisterRequest(){
	
	this.setTargetName = function setTargetName(value){
		if(!validator.isIAlphanumeric(value)){
			throw new Error("Target Name is not a String!");
		}	
		if(!validator.isByteLength(value, 0, 255)){
			throw new Error("Target Name to long! Max length: 255");
		}
		targetName = value;
	};
	
	this.getTargetName = function getTargetName(){
		return targetName;
	};
	
	this.write = function write(buffer) {	
		console.log("TargetName: "+targetName);
		buffer.writeUInt8String(targetName);
	};

	this.getSize = function getSize(){
		var size = 0;
		size += targetName.length+1;
		return size;
	};
};

MsgPushTargetDeregisterRequest.parse = function parse(buffer) {
	var message = new MsgPushTargetDeregisterRequest();
	message.setTargetName(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgPushTargetDeregisterRequest;