/**
 * New node file
 */
var validator = require('validator');

function MsgIPStatisticResponse(){
	this.response = undefined;
	this.ipRx = undefined;
	this.ipTx = undefined;
};

MsgIPStatisticResponse.prototype.setResponse = function setResponse(value){
	this.response = value;
};

MsgIPStatisticResponse.prototype.getResponse = function getResponse(){
	return this.response;
};

MsgIPStatisticResponse.prototype.setIpRx = function setIpRx(value){
	this.ipRx = value;
};

MsgIPStatisticResponse.prototype.getIpRx = function getIpRx(){
	return this.ipRx;
};

MsgIPStatisticResponse.prototype.setIpTx = function setIpTx(value){
	this.ipTx = value;
};

MsgIPStatisticResponse.prototype.getIpTx = function getIpTx(){
	return this.ipTx;
};

MsgIPStatisticResponse.prototype.write = function write(buffer) {	
	buffer.writeUInt8(this.response);
	buffer.writeUInt64(this.ipTx);
	buffer.writeUInt64(this.ipRx);
};

MsgIPStatisticResponse.prototype.getSize = function getSize(){
	return 17;
};

MsgIPStatisticResponse.prototype.toString = function toString(){
	var str = "";
	str+="Response: "+this.response.toString(16)+"\n";
	str+="IP-Rx: "+this.ipRx.toString(16)+"\n";
	str+="IP-Tx: "+this.ipTx.toString(16)+"\n";
	
	return str;
};

MsgIPStatisticResponse.parse = function parse(buffer) {
	var message = new MsgIPStatisticResponse();
	message.setResponse(buffer.readUInt8());
	message.setIpRx(buffer.readUInt64());
	message.setIpTx(buffer.readUInt64());
	
	return message;
};

module.exports = MsgIPStatisticResponse;