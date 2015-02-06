/**
 * New node file
 */
var validator = require('validator');

var response;
var ipRx;
var ipTx;

function MsgIPStatisticResponse(){
	response = undefined;
	ipRx = undefined;
	ipTx = undefined;
};

MsgIPStatisticResponse.prototype.setResponse = function setResponse(value){
	if(!validator.isInt(value)){
		throw new Error("Response value not an integer!");
	}	
	if(value< 0x00 || value>0x01){
		throw new Error("Unknown Response value!");
	}
	response = value;
};

MsgIPStatisticResponse.prototype.getResponse = function getResponse(){
	return response;
};

MsgIPStatisticResponse.prototype.setIpRx = function setIpRx(value){
	if(!validator.isInt(value)){
		throw new Error("IP-RX not an integer!");
	}	
	if(value<0){
		throw new Error("IP-RX value must be >= 0 !");
	}
	ipRx = value;
};

MsgIPStatisticResponse.prototype.getIpRx = function getIpRx(){
	return ipRx;
};

MsgIPStatisticResponse.prototype.setIpTx = function setIpTx(value){
	if(!validator.isInt(value)){
		throw new Error("IP-TX not an integer!");
	}	
	if(value<0){
		throw new Error("IP-TX must be >= 0 !");
	}
	ipTx = value;
};

MsgIPStatisticResponse.prototype.getIpTx = function getIpTx(){
	return ipTx;
};

MsgIPStatisticResponse.prototype.write = function write(buffer) {	
	console.log("Response: "+response.toString(16));
	console.log("IpRx: "+ipRx.toString(16));
	console.log("IpTx: "+ipTx.toString(16));
	
	buffer.writeUInt8(response);
	buffer.writeUInt64(ipTx);
	buffer.writeUInt64(ipRx);
};

MsgIPStatisticResponse.prototype.getSize = function getSize(){
	var size = 17;
	return size;
};


MsgIPStatisticResponse.parse = function parse(buffer) {
	var message = new MsgIPStatisticResponse();
	message.setResponse(buffer.readUInt8());
	message.setIpRx(buffer.readUInt64());
	message.setIpTx(buffer.readUInt64());
	
	return message;
};

module.exports = MsgIPStatisticResponse;