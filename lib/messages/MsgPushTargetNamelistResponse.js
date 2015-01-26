/**
 * New node file
 */

var response;
var nameList;

function MsgPushTargetNamelistResponse(){
	
	this.setResponse = function setResponse(value){
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.setNameList = function setNameList(value){
		nameList = value;
	};
	
	this.getNameList = function getNameList(){
		return nameList;
	};
	
	this.write = function write(buffer) {			
		console.log("Response: "+response.toString(16));
		
		buffer.writeUInt8(response);
		nameList.write(buffer);
	};
	
	this.getSize = function getSize(){
		var size = 1;
		size += PushTargetNameList.getSize();
		return size;
	};
};

MsgPushTargetNamelistResponse.parse = function parse(buffer) {
	var message = new MsgPushTargetNamelistResponse();
	message.setResponse(buffer.readUInt8());
	message.setNameList(PushTargetNamelist.parse(buffer));
	
	return message;
};

module.exports = MsgPushTargetNamelistResponse;
