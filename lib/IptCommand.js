/**
 * New node file
 */
var validator = require('validator');
var IptHeader = require('./IptHeader');
var IptMessage = require('./IptMessage');
var IptBuffer = require('./IptBuffer');

var header;
var message;

function IptCommand(commandTag){
	if(commandTag!=undefined){
		header = new IptHeader(commandTag);
		message = new IptMessage(commandTag);
	}
};


IptCommand.prototype.write = function write(){
	
	header.setLen(header.getSize() + message.getSize());
	var buffer = new IptBuffer(new Buffer(header.getLen()));		
	
	header.write(buffer);
	message.write(buffer);
	return buffer;
};

IptCommand.prototype.getHeader = function getHeader(){
	return header;
};

IptCommand.prototype.getMessage = function getMessage(){
	return message;
};

IptCommand.prototype.setHeader = function setHeader(value){
	header = value;
};

IptCommand.prototype.setMessage = function setMessage(value){
	message = value;
};

IptCommand.prototype.toString = function toString(){
	var str = "";
	str += header.toString(); 
	str += message.toString();
	return str;
};

IptCommand.prototype.getResponse = function getResponse(){
	var iptResponse = new IptCommand(message.getResponseTag());
	iptResponse.getHeader().setSequenceNumber(header.getSequenceNumber());
	iptResponse.getHeader().setReserved(0x00);
	iptResponse.getHeader().setConnectionId(0x0000);
	return iptResponse;
};

IptCommand.parse = function parse(buffer){
	
	var iptBuffer = new IptBuffer(buffer);
	
	var command = new IptCommand(); 
	command.setHeader(IptHeader.parse(iptBuffer));
	command.setMessage(IptMessage.parse(iptBuffer));
	
	return command;
};


module.exports = IptCommand;



