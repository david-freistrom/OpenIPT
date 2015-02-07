/**
 * New node file
 */
var validator = require('validator');
var Constants = require('./Constants');

var buffer;
var offset=0;

function IptBuffer(value){

	if(value==undefined) {
		buffer = new Buffer(Constants.MAX_BUFFER_SIZE);
	} else {
		// Check Escape Sequence for Push Operations
		if(value[0]===Constants.ESCAPE_SEQUENCE){
			buffer = value.slice(1,value.length);
		} else {
			buffer=value;
		}
	}
	offset=0;
};

IptBuffer.prototype.getBuffer = function getBuffer(){
	return buffer;
};

IptBuffer.prototype.getOffset = function getOffset(){
	return offset;
};

IptBuffer.prototype.setOffset = function setOffset(value){
	offset = value;
};

IptBuffer.prototype.getLength = function getLength(){
	return buffer.length;
};

IptBuffer.prototype.readUInt8String = function readUInt8String() {		
	var string="";
	for(offset; offset<this.getLength(); offset++){
    	if(buffer[offset]!=0x00){
			string+=buffer.toString('utf8', offset,offset+1);		
		} else {
			offset++;
			break;
    	}
    }
	return string;
};

IptBuffer.prototype.writeUInt8String = function writeUInt8String(string) {
	
	for(var i=0; i<string.length; i++){
		if(string.charCodeAt(i)<0x20 || string.charCodeAt(i)>0x7f){
			throw new Error("Invalid string!");
		}
		buffer.writeUInt8(string.charCodeAt(i), offset);
		offset++;
    }
	buffer.writeUInt8(0x00, offset);
	offset++;
};

IptBuffer.prototype.readUInt8VarArray = function readUInt8VarArray(){
	var size = buffer.readUInt32LE(offset);
	offset+=4;
	var dataBlock = new Buffer(size);
	for(var i=0; i<size; i++){
		dataBlock[i]=buffer[offset];
		offset++;
	}
	return dataBlock;
};

IptBuffer.prototype.writeUInt8VarArray = function writeUInt8VarArray(dataBlock){
	buffer.writeUInt32LE(dataBlock.length, offset);
	offset+=4;
	
	for(var i=0; i<dataBlock.length; i++){
		buffer.writeUInt8(dataBlock.readUInt8(i), offset);
		offset++;
	}
};

IptBuffer.prototype.writeUInt8Array = function writeUInt8Array(scrambleKey){
	for(var i=0; i<32; i++){
		buffer.writeUInt8(scrambleKey.readUInt8(i), offset);
		offset++;
	}
};

IptBuffer.prototype.readUInt8Array = function readUInt8Array(){
	var scrambleKey = buffer.slice(offset, offset+32);
	offset+=32;
	return scrambleKey.toString('hex');;
};

IptBuffer.prototype.readUInt8 = function readUInt8(){
	var result = buffer[offset];
	offset++;
	return result;
};

IptBuffer.prototype.readUInt16 = function readUInt16(){
	var result = buffer.readUInt16LE(offset);
	offset+=2;
	return result;
};

IptBuffer.prototype.readUInt32 = function readUInt32(){
	var result = buffer.readUInt32LE(offset);
	offset+=4;
	return result;
};

IptBuffer.prototype.readUInt64 = function readUInt64(){
	var result = (buffer.readUInt32LE(offset+4)<<8) + buffer.readUInt32LE(offset);
	offset+=8;
	return result;
};

IptBuffer.prototype.writeUInt8 = function writeUInt8(value){
	buffer.writeUInt8(value, offset);
	offset+=1;
}

IptBuffer.prototype.writeUInt16 = function writeUInt16(value){
	buffer.writeUInt16LE(value, offset);
	offset+=2;
};

IptBuffer.prototype.writeUInt32 = function writeUInt32(value){
	buffer.writeUInt32LE(value, offset);
	offset+=4;
};

IptBuffer.prototype.writeUInt64 = function writeUInt64(value){
	console.log(value);
	buffer.writeDoubleLE(value, offset);
	offset+=8;
};

IptBuffer.prototype.getScrambledBuffer = function getScrambledBuffer(scrambleKey){	
	var scrambledBuffer=new Buffer(buffer.length); 
	
	var idx=0;
	for(var i=0; i<buffer.length; i++){
		var result = buffer.readUInt8(i)^scrambleKey.readUInt8(idx);	
		scrambledBuffer.writeUInt8(result, i);
		idx>=31 ? idx=0 : idx++;
	}
	return scrambledBuffer;
};

IptBuffer.prototype.scrambleBufferPart = function scrambleBufferPart(scrambleKey, offsetStart, offsetEnd){		
	var tmpOffset = offset;
	var idx=0;
	for(var i=offsetStart; i<offsetEnd; i++){
		var result = buffer.readUInt8(i)^scrambleKey.readUInt8(idx);	
		buffer.writeUInt8(result, i);
		idx>=31 ? idx=0 : idx++;
	}
	offset = tmpOffset;
};

IptBuffer.prototype.toString = function toString(){
	return buffer.toString('hex');	
};


module.exports = IptBuffer;


