/**
 * New node file
 */

var time;

function MsgDeviceTimeResponse(){
	
	this.setTime = function setTime(value){
		time = value;
	};
	
	this.getTime = function getTime(){
		return time;
	};
	
	this.write = function write(buffer) {			
		console.log("Time: "+time.toString(16));
		buffer.writeUInt32(time);
	};
	
	this.getSize = function getSize(){
		var size = 4;
		return size;
	};
};

MsgDeviceTimeResponse.parse = function parse(buffer) {
	var message = new MsgDeviceTimeResponse();
	message.setTime(buffer.readUInt32());
	
	return message;
};

module.exports = MsgDeviceTimeResponse;