/**
 * New node file
 */
var validator = require('validator');
var Constants = require('../Constants');

function MsgConnectionOpenRequest(){
	this.targetAddress=undefined;
	this.sourceAddress= undefined;
};

MsgConnectionOpenRequest.prototype.getSize = function getSize(){
	var size = 0;
	
	if(this.sourceAddress!=undefined){
		size += this.sourceAddress.length+1;
	}
	
	if(this.targetAddress!=undefined){
		size += this.targetAddress.length+1;
	} else {
		size++;
	}
	
	return size;
};

MsgConnectionOpenRequest.prototype.setTargetAddress = function setTargetAddress(value){
	this.targetAddress = value;
};

MsgConnectionOpenRequest.prototype.setSourceAddress = function setSourceAddress(value){
	this.sourceAddress = value;
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
	var combinedAddress="";
	
	if(this.targetAddress!=undefined){
		combinedAddress+=this.targetAddress;
	}
	
	if(this.sourceAddress!=undefined){
		combinedAddress += String.fromCharCode(parseInt('7f', 16));
		combinedAddress += this.sourceAddress; 
	}
	
	if(combinedAddress.length>63){
		throw new Error("Combined Address too long!");
	} else {
		try{
			buffer.writeUInt8String(combinedAddress);
		} catch(error){
			throw error;
		}
	}
};

MsgConnectionOpenRequest.prototype.getTargetAddress = function getTargetAddress(){
	return this.targetAddress;
};

MsgConnectionOpenRequest.prototype.getSourceAddress = function getSourceAddress(){
	return this.sourceAddress;
};

MsgConnectionOpenRequest.prototype.toString = function toString(){
	var str = "";
	str+="Target-Address: "+this.targetAddress+"\n";
	str+="Source-Address: "+this.sourceAddress+"\n";	
	return str;
};

MsgConnectionOpenRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.CONNECTION_OPEN_RESPONSE;
};

MsgConnectionOpenRequest.parse = function parse(buffer) {
	var message = new MsgConnectionOpenRequest();
	var combinedAddress = buffer.readUInt8String();
	
	if(combinedAddress.indexOf(String.fromCharCode(parseInt('7f', 16))) > -1){
		var splitAddress = combinedAddress.split(String.fromCharCode(parseInt('7f', 16)));
		if(splitAddress[0] != ""){
			message.setTargetAddress(splitAddress[0]);
		}
		message.setSourceAddress(splitAddress[1]);
	} else {
		message.setTargetAddress(combinedAddress);
	}
	
	return message;
};

module.exports = MsgConnectionOpenRequest;