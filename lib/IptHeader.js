/**
 * New node file
 */
var validator = require('validator');

function IptHeader(value){
	this.commandTag = value;
	this.sequenceNumber;
	this.reserved;
	this.connectionId;
	this.len;
};

IptHeader.prototype.write= function write(buffer){
	buffer.writeUInt16(this.commandTag);
	buffer.writeUInt8(this.sequenceNumber);
	buffer.writeUInt8(this.reserved);
	buffer.writeUInt32(this.len);
	
	// Multi Channel Version
	if(this.reserved===0x01){
		buffer.writeUInt16(this.connectionId);
	}
};

IptHeader.prototype.setSequenceNumber = function setSequenceNumber(value){
	this.sequenceNumber = value;
};

IptHeader.prototype.setCommandTag = function setCommandTag(value){
	this.commandTag = value;
};

IptHeader.prototype.setReserved = function setReserved(value){
	this.reserved = value;
};

IptHeader.prototype.setConnectionId = function setConnectionId(value){
	this.connectionId = value;
};

IptHeader.prototype.setLen = function setLen(value){
	this.len = value;
};

IptHeader.prototype.getSequenceNumber = function getSequenceNumber(){
	return this.sequenceNumber;
};

IptHeader.prototype.getCommandTag = function getCommandTag(){
	return this.commandTag;
};

IptHeader.prototype.getReserved = function getReserved(){
	return this.reserved;
};

IptHeader.prototype.getConnectionId = function getConnectionId(){
	return this.connectionId;
};

IptHeader.prototype.getLen = function getLen(){
	return this.len;
};

IptHeader.prototype.getSize = function getSize(){
	var size = 8;	
	// Multi Channel Version
	if(reserved===0x01){
		size += 2;
	}	
	return size;
};

IptHeader.prototype.toString = function toString(){
	var str = "";
	str+="Command-Tag: "+this.commandTag.toString(16)+"\n";
	str+="Sequence-Number: "+this.sequenceNumber.toString(16)+"\n";
	str+="Reserved: "+this.reserved.toString(16)+"\n";
	str+="Len: "+this.len+"\n";
	
	if(this.reserved===0x01){
		str+="Connection-ID: "+this.connectionId.toString(16)+"\n";
	}
	
	return str;
};

IptHeader.parse = function parse(buffer) {	
	var header = new IptHeader(buffer.readUInt16());
	header.setSequenceNumber(buffer.readUInt8());
	header.setReserved(buffer.readUInt8());
	header.setLen(buffer.readUInt32());
	
	if(header.getReserved()===0x01){
		header.setConnectionId(buffer.readUInt16());
	}
	
	return header;
};

module.exports = IptHeader;
