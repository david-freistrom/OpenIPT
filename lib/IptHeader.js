/**
 * New node file
 */
var validator = require('validator');
var commandTag;
var sequenceNumber;
var reserved;
var connectionId;
var len;

function IptHeader(commandTag){
	
	commandTag = commandTag;
	
	this.write= function write(buffer){
		
		console.log("Buffer length: "+buffer.length());
		console.log("Command Tag: "+commandTag.toString(16));
		console.log("Sequence Number: "+sequenceNumber.toString(16));
		console.log("Reserved: "+reserved.toString(16));	
		console.log("Len: "+len.toString());
		
		buffer.writeUInt16(commandTag);
		buffer.writeUInt8(sequenceNumber);
		buffer.writeUInt8(reserved);
		buffer.writeUInt32(len);
		
		// Multi Channel Version
		if(reserved===0x01){
			console.log("Connection ID: "+connectionId.toString(16));
			buffer.writeUInt16(connectionId);
		}
	};
	
	this.setSequenceNumber = function setSequenceNumber(value){
		sequenceNumber = value;
	};
	
	this.setCommandTag = function setCommandTag(value){
		commandTag = value;
	};
	
	this.setReserved = function setReserved(value){
		reserved = value;
	};
	
	this.setConnectionId = function setConnectionId(value){
		connectionId = value;
	};
	
	this.setLen = function setLen(value){
		len = value;
	};
	
	this.getSequenceNumber = function getSequenceNumber(){
		return sequenceNumber;
	};
	
	this.getCommandTag = function getCommandTag(){
		return commandTag;
	};
	
	this.getReserved = function getReserved(){
		return reserved;
	};
	
	this.getConnectionId = function getConnectionId(){
		return connectionId;
	};
	
	this.getLen = function getLen(){
		return len;
	};
	
	this.getSize = function getSize(){
		var size = 8;
		
		// Multi Channel Version
		if(reserved===0x01){
			size += 2;
		}	
		return size;
	};
};

IptHeader.parse = function parse(buffer) {
	
	var header = new IptHeader(buffer.readUInt16());
		
	header.setSequenceNumber(buffer.readUInt8());
	header.setReserved(buffer.readUInt8());
	header.setLen(buffer.readUInt32());
	
	console.log("Command Tag: "+header.getCommandTag().toString(16));
	console.log("Sequence Number: "+header.getSequenceNumber().toString(16));
	console.log("Reserved: "+header.getReserved().toString(16));
	console.log("Len: "+header.getLen().toString());
	
	if(header.getReserved()===0x01){
		header.setConnectionId(buffer.readUInt16());
		console.log("Connection ID: "+header.getConnectionId().toString(16));
	}
	
	return header;
};

module.exports = IptHeader;
