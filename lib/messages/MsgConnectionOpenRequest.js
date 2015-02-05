/**
 * New node file
 */
var validator = require('validator');

var targetAddress;
var sourceAddress;

function MsgConnectionOpenRequest(){
	
	this.setTargetAddress = function setTargetAddress(value){
		if(!this.validateAddress(value)){
			throw new Error("Invalid Target-Address format!");
		}	
		if(!validator.isByteLength(value, 0, 62)){
			throw new Error("Target-Address too long!");
		}
		targetAddress = value;
	};
	
	this.getTargetAddress = function getTargetAddress(){
		return targetAddress;
	};
	
	this.setSourceAddress = function setSourceAddress(value){
		if(!this.validateAddress(value)){
			throw new Error("Invalid Source-Address format!");
		}	
		if(!validator.isByteLength(value, 0, 62)){
			throw new Error("Source-Address too long!");
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
	
	this.validateAddress = function validateAddress(value){
		if(validator.isNumeric(value)){
			return false;
		}
		var uris = value.split("!");
		for(var idx in uris){
			if(!validator.matches(uris[idx], /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}(\:[0-9]{1,5})?/)){
				return false;
			}
		}
		return true;
	}
};


MsgConnectionOpenRequest.parse = function parse(buffer) {
	var message = new MsgConnectionOpenRequest();
	var completeStr = buffer.readUInt8String();
	
	
	message.setTargetAddress(completeString);
	message.setSourceAddress(completeString);
	
	
	return message;
};

module.exports = MsgConnectionOpenRequest;