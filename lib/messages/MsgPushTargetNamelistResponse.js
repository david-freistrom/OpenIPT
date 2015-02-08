/**
 * New node file
 */
var validator = require('validator');

function MsgPushTargetNamelistResponse(){
	this.response = undefined;
	this.nameList = undefined;
};

MsgPushTargetNamelistResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgPushTargetNamelistResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgPushTargetNamelistResponse.prototype.setNameList = function setNameList(value){
	this.nameList = value;
};

MsgPushTargetNamelistResponse.prototype.getNameList = function getNameList(){
	return this.nameList;
};

MsgPushTargetNamelistResponse.prototype.write = function write(buffer) {				
	buffer.writeUInt8(this.response);
	this.nameList.write(buffer);
};

MsgPushTargetNamelistResponse.prototype.getSize = function getSize(){
	return 1+this.namelist.getSize();
};

MsgPushTargetNamelistResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	str+=this.nameList.toString();
	return str;
};

MsgPushTargetNamelistResponse.parse = function parse(buffer) {
	var message = new MsgPushTargetNamelistResponse();
	message.setResponse(buffer.readUInt8());
	message.setNameList(PushTargetNamelist.parse(buffer));
	
	return message;
};

module.exports = MsgPushTargetNamelistResponse;
