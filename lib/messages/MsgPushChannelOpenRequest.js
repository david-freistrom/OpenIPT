/**
 * New node file
 */

var target;
var ackTimeout;

function MsgPushChannelOpenRequest(){
	
	this.setTarget = function setTarget(value){
		target = value;
	};
	
	this.getTarget = function getTarget(){
		return target;
	};
	
	this.setAckTimeout = function setAckTimeout(value){
		ackTimeout = value;
	};
	
	this.getAckTimeout = function getAckTimeout(){
		return ackTimeout;
	};
	
	this.write = function write(buffer) {			
		console.log("Target: "+target.toString(16));
		
		target.write(buffer);
		buffer.writeUInt16(ackTimeout);
	};
	this.getSize = function getSize(){
		var size = 2;
		size += target.getSize();
		return size;
	};
};

MsgPushChannelOpenRequest.parse = function parse(buffer) {
	var message = new MsgPushChannelOpenRequest();
	message.setTarget(PushTargetNameReq.parse(buffer));
	message.setAckTimeout(buffer.readUInt16());
	
	return message;
};

module.exports = MsgPushChannelOpenRequest;