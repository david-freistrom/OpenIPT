/**
 * New node file
 */

var streamNumber;

function MsgStreamChannelCloseRequest(){

	this.setStreamNumber = function setStreamNumber(value){
		streamNumber = value;
	};
	
	this.getStreamNumber = function getStreamNumber(){
		return streamNumber;
	};
	
	this.write = function write(buffer) {	
		console.log("Stream Number: "+streamNumber.toString(16));
		buffer.writeUInt32(streamNumber);
	};
	
	this.getSize = function getSize(){
		var size = 4;
		return size;
	};
};

MsgStreamChannelCloseRequest.parse = function parse(buffer) {
	var message = new MsgStreamChannelCloseRequest();
	message.setStreamNumber(buffer.readUInt32());
	
	return message;
};

module.exports = MsgStreamChannelCloseRequest;