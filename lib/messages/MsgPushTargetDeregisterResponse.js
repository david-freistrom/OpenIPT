/**
 * New node file
 */

var response;
var targetName;

function MsgPushTargetDeregisterResponse(){
	
	this.write = function write(buffer) {
		console.log("Response: "+response.toString(16));
		console.log("Target Name: "+targetName);
		
		buffer.writeUInt8(response);
		buffer.writeUInt8String(targetName);
	};
	
	this.getSize = function getSize(){
		var size = 1;
		size += targetName.length;
		return size;
	};
};

MsgPushTargetDeregisterResponse.parse = function parse(buffer) {
	var message = new MsgPushTargetDeregisterResponse();
	message.setResponse(buffer.readUInt8());
	message.setTargetName(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgPushTargetDeregisterResponse;