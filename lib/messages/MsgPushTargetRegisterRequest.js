/**
 * New node file
 */
var validator = require('validator');

var targetName;
var maxPacketSize;
var maxWindowSize;

function MsgPushTargetRegisterRequest(){
	
	this.setTargetName = function setTargetName(value){
		if(!validator.isIAlphanumeric(value)){
			throw new Error("Target-Name not a string!");
		}	
		if(!validator.isByteLength(value, 0, 255)){
			throw new Error("Target-Name too long!");
		}
		targetName = value;
	};
	
	this.getTargetName = function getTargetName(){
		return targetName;
	};

	this.setMaxPacketSize = function setMaxPacketSize(value){
		if(!validator.isInt(value)){
			throw new Error("Max-Packet-Size not an integer!");
		}	
		if(value<0){
			throw new Error("Max-Packet-Size must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 2)){
			throw new Error("Max-Packet-Size out of range!");
		}
		maxPacketSize = value;
	};
	
	this.getMaxPacketSize = function getMaxPacketSize(){
		return maxPacketSize;
	};
	
	this.setMaxWindowSize = function setMaxWindowSize(value){
		if(!validator.isInt(value)){
			throw new Error("Max-Window-Size not an integer!");
		}	
		if(value<0){
			throw new Error("Max-Window-Size must be >= 0 !");
		}
		if(!validator.isByteLength(value, 1, 1)){
			throw new Error("Max-Window-Size out of range!");
		}
		maxWindowSize = value;
	};
	
	this.getMaxWindowSize = function getMaxWindowSize(){
		return maxWindowSize;
	};
	
	this.write = function write(buffer) {	
		console.log("Target Name: "+targetName);
		console.log("Max Packet Size: "+maxPacketSize.toString(16));
		console.log("Max Window Size: "+maxWindowSize.toString(16));
		
		buffer.writeUInt8String(targetName);
		buffer.writeUInt16(maxPacketSize);
		buffer.writeUInt8(maxWindowSize);
	};
	
	this.getSize = function getSize(){
		var size = 3;
		size += targetName.length+1;
		return size;
	};
};

MsgPushTargetRegisterRequest.parse = function parse(buffer) {
	var message = new MsgPushTargetRegisterRequest();
	message.setTargetName(buffer.readUInt8String());
	message.setMaxPacketSize(buffer.readUInt16());
	message.setMaxWindowSize(buffer.readUInt8());
	
	return message;
};

module.exports = MsgPushTargetRegisterRequest;