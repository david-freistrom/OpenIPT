/**
 * New node file
 */
var validator = require('validator');
var Constants = require('./Constants');
var Utils = require('./Utils');

function IptBuffer(buffer){
	
	this.buffer=undefined;
	
	if(buffer==undefined) {
		this.buffer = new Buffer(Constants.MAX_BUFFER_SIZE);
	} else {
		// Check Escape Sequence for Push Operations
		if(buffer[0]===Constants.ESCAPE_SEQUENCE){
			this.buffer = buffer.slice(1,buffer.length);
		} else {
			this.buffer=buffer;
		}
	}
	this.offset=0;
};

IptBuffer.prototype.length = function length(){
	return this.buffer.length;
};

IptBuffer.prototype.readUInt8String = function readUInt8String() {		
	var string="";
	for(this.offset; this.offset<this.length(); this.offset++){
    	if(this.buffer[this.offset]!=0x00){
			string+=this.buffer.toString('utf8', this.offset,this.offset+1);		
		} else {
			this.offset++;
			break;
    	}
    }
	return string;
};

IptBuffer.prototype.writeUInt8String = function writeUInt8String(string) {
	for(var i=0; i<string.length; i++){
		this.buffer.writeUInt8(string.charCodeAt(i), this.offset);
		if(string.charCodeAt(i)==0x00){
			this.buffer.writeUInt8(0x00, this.offset+1);
			this.offset+=2;
		} else {
			this.offset++;
		}
    }
	this.buffer.writeUInt8(0x00, this.offset);
	this.offset++;
};

IptBuffer.prototype.readUInt8VarArray = function readUInt8VarArray(){
	var size = this.buffer.readUInt32LE(this.offset);
	var dataBlock = new Buffer(size);
	for(var i=0; i<size; i++){
		dataBlock[i]=this.buffer[this.offset];
		this.offset++;
	}
	return dataBlock;
};

IptBuffer.prototype.writeUInt8VarArray = function writeUInt8VarArray(dataBlock){
	this.buffer.writeUInt32LE(dataBlock.length, this.offset);
	this.offset+=4;
	for(var i=0; i<dataBlock.length; i++){
		this.buffer[this.offset]= dataBlock[i];
		this.offset++;
	}
};

IptBuffer.prototype.writeUInt8Array = function writeUInt8Array(scrambleKey){
	for(var i=0; i<32; i++){
		this.buffer.writeUInt8(scrambleKey[i], this.offset);
		this.offset++;
	}
};

IptBuffer.prototype.readUInt8Array = function readUInt8Array(){
	var scrambleKey = this.buffer.slice(this.offset, this.offset+32);
	this.offset+=32;
	return scrambleKey;
};

IptBuffer.prototype.readUInt8 = function readUInt8(){
	var result = this.buffer[this.offset];
	this.offset++;
	return result;
};

IptBuffer.prototype.readUInt16 = function readUInt16(){
	var result = this.buffer.readUInt16LE(this.offset);
	this.offset+=2;
	return result;
};

IptBuffer.prototype.readUInt32 = function readUInt32(){
	var result = this.buffer.readUInt32LE(this.offset);
	this.offset+=4;
	return result;
};

IptBuffer.prototype.readUInt64 = function readUInt64(){
	var result = this.buffer.readDoubleLE(this.offset);
	this.offset+=8;
	return result;
};

IptBuffer.prototype.writeUInt8 = function writeUInt8(value){
	this.buffer.writeUInt8(value, this.offset);
	this.offset+=1;
}

IptBuffer.prototype.writeUInt16 = function writeUInt16(value){
	this.buffer.writeUInt16LE(value, this.offset);
	this.offset+=2;
};

IptBuffer.prototype.writeUInt32 = function writeUInt32(value){
	this.buffer.writeUInt32LE(value, this.offset);
	this.offset+=4;
};

IptBuffer.prototype.writeUInt64 = function writeUInt64(value){
	this.buffer.writeDoubleLE(value, this.offset);
	this.offset+=8;
};

IptBuffer.prototype.getScrambledBuffer = function getScrambledBuffer(){
	
};

IptBuffer.prototype.toString = function toString(){
	return this.buffer.toString('hex');	
};


module.exports = IptBuffer;


