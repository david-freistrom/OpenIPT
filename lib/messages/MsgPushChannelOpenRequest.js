/**
 * New node file
 */
var validator = require('validator');

var target;
var ackTimeout;

function MsgPushChannelOpenRequest(){
	
	this.setTarget = function setTarget(value){
		try{
			target = value;
		} catch(error){
			throw error;
		}	
	};
	
	this.getTarget = function getTarget(){
		return target;
	};
	
	this.setAckTimeout = function setAckTimeout(value){
		if(!validator.isInt(value)){
			throw new Error("Response is not an integer!");
		}	
		if(value<0){
			throw new Error("Response must be >= 0 !");
		}
		if(!validator.isByteLength(value, 0, 2)){
			throw new Error("Channel Number out of range!");
		}
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