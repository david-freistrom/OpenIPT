/**
 * New node file
 */
var IptHeader = require('./IptHeader');
var IptMessage = require('./IptMessage');
var IptBuffer = require('./IptBuffer');
var Constants = require('./Constants');

function IptCommand(commandTag){
	if(commandTag!=undefined){
		this.header = new IptHeader(commandTag);
		this.message = new IptMessage(commandTag);
	}
};

IptCommand.prototype.write = function write(){
	this.header.setLen(this.header.getSize() + this.message.getSize());
	
	if([Constants.CONNECTION_OPEN_REQUEST, Constants.CONNECTION_OPEN_RESPONSE, Constants.MULTI_PUBLIC_LOGIN_REQUEST, Constants.MULTI_PUBLIC_LOGIN_RESPONSE, Constants.SCRAMBLED_LOGIN_REQUEST, Constants.SCRAMBLED_LOGIN_RESPONSE, Constants.MULTI_SCRAMBLED_LOGIN_REQUEST, Constants.MULTI_SCRAMBLED_LOGIN_RESPONSE].indexOf(this.header.getCommandTag()) < 0){
		var buffer = new IptBuffer(new Buffer(this.header.getLen()+1));
		buffer.writeUInt8(0x1b);
	} else {
		var buffer = new IptBuffer(new Buffer(this.header.getLen()));
	}
	
	this.header.write(buffer);
	this.message.write(buffer);
	
	return buffer;
};

IptCommand.prototype.getHeader = function getHeader(){
	return this.header;
};

IptCommand.prototype.getMessage = function getMessage(){
	return this.message;
};

IptCommand.prototype.setHeader = function setHeader(value){
	this.header = value;
};

IptCommand.prototype.setMessage = function setMessage(value){
	this.message = value;
};

IptCommand.prototype.toString = function toString(){
	var str = "";
	str += this.header.toString(); 
	str += this.message.toString();
	return str;
};

IptCommand.prototype.getResponse = function getResponse(){
	var iptResponse = new IptCommand(this.message.getResponseTag());
	iptResponse.getHeader().setSequenceNumber(this.header.getSequenceNumber());
	iptResponse.getHeader().setReserved(0x00);
	iptResponse.getHeader().setConnectionId(0x0000);
	return iptResponse;
};

IptCommand.parse = function parse(buffer){	
	if(buffer[0]===Constants.ESCAPE_SEQUENCE){
		buffer = buffer.slice(1,buffer.length);
	}
	var iptBuffer = new IptBuffer(buffer);
	var command = new IptCommand(); 
	command.setHeader(IptHeader.parse(iptBuffer));
	command.setMessage(IptMessage.parse(iptBuffer));
	
	return command;
};

module.exports = IptCommand;