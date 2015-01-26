/**
 * New node file
 */

var targetName;
var maxPacketSize;
var maxWindowSize;

function MsgPushTargetRegisterRequest(){
	
	this.setTargetName = function setTargetName(value){
		targetName = value;
	};
	
	this.getTargetName = function getTargetName(){
		return targetName;
	};

	this.setMaxPacketSize = function setMaxPacketSize(value){
		maxPacketSize = value;
	};
	
	this.getMaxPacketSize = function getMaxPacketSize(){
		return maxPacketSize;
	};
	
	this.setMaxWindowSize = function setMaxWindowSize(value){
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
		size += targetName.length;
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