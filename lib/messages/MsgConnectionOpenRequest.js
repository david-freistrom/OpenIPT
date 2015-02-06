/**
 * New node file
 */
var validator = require('validator');

var targetAddress;
var sourceAddress;

function MsgConnectionOpenRequest(){
	targetAddress=undefined;
	sourceAddress= undefined;
};

MsgConnectionOpenRequest.prototype.getSize = function getSize(){
	var size = 0;
	
	console.log(sourceAddress);
	console.log(targetAddress);
	
	if(sourceAddress!=undefined){
		size += sourceAddress.length+1;
	}
	if(targetAddress!=undefined){
		size += targetAddress.length+1;
	} else {
		size++;
	}
	
	return size;
};

MsgConnectionOpenRequest.prototype.setTargetAddress = function setTargetAddress(value){
	if(!this.validateAddress(value)){
		throw new Error("Invalid Target-Address format!");
	}	
	if(!validator.isByteLength(value, 0, 62)){
		throw new Error("Target-Address too long!");
	}
	targetAddress = value;
};

MsgConnectionOpenRequest.prototype.setSourceAddress = function setSourceAddress(value){
	if(!this.validateAddress(value)){
		throw new Error("Invalid Source-Address format!");
	}	
	if(!validator.isByteLength(value, 0, 62)){
		throw new Error("Source-Address too long!");
	}
	sourceAddress = value;
};

MsgConnectionOpenRequest.prototype.validateAddress = function validateAddress(value){
	if(validator.isNumeric(value)){
		return false;
	}
	var uris = value.split("!");
	for(var idx in uris){
		var ip_port = uris[idx].split(":");
		if(!validator.isIP(ip_port[0])){
			return false;
		}
		if(ip_port.length>1 && (!validator.isNumeric(ip_port[1]) || parseInt(ip_port[1])<0 || parseInt(ip_port[1])>65535)){
			return false;
		}
	}
	return true;
};

MsgConnectionOpenRequest.prototype.write = function(buffer) {	
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

MsgConnectionOpenRequest.prototype.getTargetAddress = function getTargetAddress(){
	return targetAddress;
};

MsgConnectionOpenRequest.prototype.getSourceAddress = function getSourceAddress(){
	return sourceAddress;
};

MsgConnectionOpenRequest.parse = function parse(buffer) {
	var message = new MsgConnectionOpenRequest();
	var completeStr = buffer.readUInt8String();
	
	
	message.setTargetAddress(completeString);
	message.setSourceAddress(completeString);
	
	
	return message;
};

module.exports = MsgConnectionOpenRequest;