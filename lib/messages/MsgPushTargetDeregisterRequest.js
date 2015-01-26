/**
 * New node file
 */

var targetName;

function MsgPushTargetDeregisterRequest(){
	
	this.setTargetName = function setTargetName(value){
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
		size += targetName.length;
		return size;
	};
};

MsgPushTargetDeregisterRequest.parse = function parse(buffer) {
	var message = new MsgPushTargetDeregisterRequest();
	message.setTargetName(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgPushTargetDeregisterRequest;