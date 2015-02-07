/**
 * New node file
 */
var validator = require('validator');
var commandTag;
var sequenceNumber;
var reserved;
var connectionId;
var len;

function IptHeader(value){
//	if(!validator.isInt(value)){
//		throw new Error("Command-Tag not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Command-Tag must be >= 0 !");
//	}
//	if(new Buffer(value.toString(16), 'hex').length < 2 || new Buffer(value.toString(16), 'hex').length > 2){
//		throw new Error("Command-Tag must have a length of 2 byte!");
//	}	
	commandTag = value;
};

IptHeader.prototype.write= function write(buffer){
	
	buffer.writeUInt16(commandTag);
	buffer.writeUInt8(sequenceNumber);
	buffer.writeUInt8(reserved);
	buffer.writeUInt32(len);
	
	// Multi Channel Version
	if(reserved===0x01){
		buffer.writeUInt16(connectionId);
	}
};

IptHeader.prototype.setSequenceNumber = function setSequenceNumber(value){
//	if(!validator.isInt(value)){
//		throw new Error("Sequence-Number not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Sequence-Number must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 1)){
//		throw new Error("Sequence-Number out of range!");
//	}
	sequenceNumber = value;
};

IptHeader.prototype.setCommandTag = function setCommandTag(value){
	commandTag = value;
};

IptHeader.prototype.setReserved = function setReserved(value){
//	if(!validator.isInt(value)){
//		throw new Error("Reserved value not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Reserved value must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 1)){
//		throw new Error("Reserved value out of range!");
//	}
	reserved = value;
};

IptHeader.prototype.setConnectionId = function setConnectionId(value){
//	if(!validator.isInt(value)){
//		throw new Error("Connection-ID not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Connection-ID must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 2)){
//		throw new Error("Connection-ID out of range!");
//	}
	connectionId = value;
};

IptHeader.prototype.setLen = function setLen(value){
//	if(!validator.isInt(value)){
//		throw new Error("Len not an integer!");
//	}	
//	if(value<0){
//		throw new Error("Len must be >= 0 !");
//	}
//	if(!validator.isByteLength(value, 1, 4)){
//		throw new Error("Len out of range!");
//	}
	len = value;
};

IptHeader.prototype.getSequenceNumber = function getSequenceNumber(){
	return sequenceNumber;
};

IptHeader.prototype.getCommandTag = function getCommandTag(){
	return commandTag;
};

IptHeader.prototype.getReserved = function getReserved(){
	return reserved;
};

IptHeader.prototype.getConnectionId = function getConnectionId(){
	return connectionId;
};

IptHeader.prototype.getLen = function getLen(){
	return len;
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
	str+="Command-Tag: "+commandTag.toString(16)+"\n";
	str+="Sequence-Number: "+sequenceNumber.toString(16)+"\n";
	str+="Reserved: "+reserved.toString(16)+"\n";
	str+="Len: "+len+"\n";
	if(reserved===0x01){
		str+="Connection-ID: "+connectionId.toString(16)+"\n";
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
