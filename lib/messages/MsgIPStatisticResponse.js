/**
 * New node file
 */

var response;
var ipRx;
var ipTx;

function MsgIPStatisticResponse(){
	
	this.setResponse = function setResponse(value){
		response = value;
	};
	
	this.getResponse = function getResponse(){
		return response;
	};
	
	this.setIpRx = function setIpRx(value){
		ipRx = value;
	};
	
	this.getIpRx = function getIpRx(){
		return ipRx;
	};
	
	this.setIpTx = function setIpTx(value){
		ipTx = value;
	};
	
	this.getIpTx = function getIpTx(){
		return ipTx;
	};
	
	this.write = function write(buffer) {	
		console.log("Response: "+response.toString(16));
		console.log("IpRx: "+ipRx.toString(16));
		console.log("IpTx: "+ipTx.toString(16));
		
		buffer.writeUInt8(response);
		buffer.writeUInt64(ipTx);
		buffer.writeUInt64(ipRx);
	};
	
	this.getSize = function getSize(){
		var size = 17;
		return size;
	};
};

MsgIPStatisticResponse.parse = function parse(buffer) {
	var message = new MsgIPStatisticResponse();
	message.setResponse(buffer.readUInt8());
	message.setIpRx(buffer.readUInt64());
	message.setIpTx(buffer.readUInt64());
	
	return message;
};

module.exports = MsgIPStatisticResponse;