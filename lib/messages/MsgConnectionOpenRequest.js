/**
 * New node file
 */
var validator = require('validator');

var targetAddress;
var sourceAddress;

function MsgConnectionOpenRequest(){
	
	this.setTargetAddress = function setTargetAddress(value){
		if(!validator.isIP(value)){
			throw new Error("Target Address is not an IP!");
		}	
		if(!validator.isByteLength(value, 0, 62)){
			throw new Error("Target Address is to long! Max length: 79");
		}
		targetAddress = value;
	};
	
	this.getTargetAddress = function getTargetAddress(){
		return targetAddress;
	};
	
	this.setSourceAddress = function setSourceAddress(value){
		if(!validator.isIP(value)){
			throw new Error("Source Address is not an IP!");
		}	
		if(!validator.isByteLength(value, 0, 62)){
			throw new Error("Source Address is to long! Max length: 79");
		}
		sourceAddress = value;
	};
	
	this.getSourceAddress = function getSourceAddress(){
		return sourceAddress;
	};
	
	this.write = function(buffer) {	
		var completeStr;
		if(targetAddress!=undefined){
			completeStr+=targetAddress;
		}
		if(sourceAddress!=undefined){
			completeStr+=0x7f;
			completeStr+=sourceAddress;
		} 
		console.log("Target Address [length]: "+targetAddress+" ["+targetAddress.length+"]");
		console.log("Source Address [length]: "+sourceAddress+" ["+sourceAddress.length+"]");
		
		buffer.writeUInt8String(completeStr);
	};
	
	this.getSize = function getSize(){
		var size = 0;
		if(sourceAddress!=undefined){
			size += sourceAddress.length+1;
		}
		if(targetAddress!=undefined){
			size += targetAddress.lebgth+1;
		} else {
			size++;
		}
		
		return size;
	};
};


MsgConnectionOpenRequest.parse = function parse(buffer) {
	var message = new MsgConnectionOpenRequest();
	var completeStr = buffer.readUInt8String();
	
	
	message.setTargetAddress(completeString);
	message.setSourceAddress(completeString);
	
	
	return message;
};

module.exports = MsgConnectionOpenRequest;