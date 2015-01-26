/**
 * New node file
 */

var channelNumber;

function MsgPushChannelCloseRequest(){
	
	this.setChannelNumber = function setChannelNumber(value){
		channelNumber = value;
	};
	
	this.getChannelNumber = function getChannelNumber(){
		return channelNumber;
	};
	
	this.write = function write(buffer) {
		console.log("Channel Number: "+channelNumber.toString(16));
		buffer.writeUInt32(channelNumber);
	};
	
	this.getSize = function getSize(){
		var size = 4;
		return size;
	};
};

MsgPushChannelCloseRequest.parse = function parse(buffer) {
	var message = new MsgPushChannelCloseRequest();
	message.setChannelNumber(buffer.readUInt32());
	
	return message;
};


module.exports = MsgPushChannelCloseRequest;