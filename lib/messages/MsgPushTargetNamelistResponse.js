/**
 * New node file
 */
var validator = require('validator');

var response;
var nameList;

function MsgPushTargetNamelistResponse(){
	
	this.setResponse = function setResponse(value){
		
		if(!validator.isInt(value)){
			throw new Error("Response value not an integer!");
		}	
		if(value< 0x00 || value>0x01){
			throw new Error("Unknown Response value!");
		}
		
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
