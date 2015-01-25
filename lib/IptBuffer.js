/**
 * New node file
 */

var Constants = require('./Constants');
var Utils = require('./Utils');

function IptBuffer(buffer){
	
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
	
	this.length = function length(){
		return this.buffer.length;
	};
	
	this.readUInt8String = function readUInt8String() {
	    var string="";
		for(this.offset; this.offset<this.length(); this.offset++){
	    	if(this.buffer[this.offset]!=0x00){
				string+=this.buffer.slice(this.offset,this.offset+1).toString();
				if(this.buffer[this.offset]==Constants.ESCAPE_SEQUENCE && this.buffer[this.offset+1]==Constants.ESCAPE_SEQUENCE){
	    			this.offset+=2;
	    		} else {
	    			this.offset++;
	    		}
			} else {
				this.offset++;
				break;
			}
	    }
		return string;
	};
	
	this.writeUInt8String = function writeUInt8String(string) {
		for(var i=0; i<string.length; i++){
			this.buffer[this.offset]=string[i];
			if(string[i]==Constants.ESCAPE_SEQUENCE){
				this.buffer[this.offset+1]=string[i];
				this.offset+=2;
			} else {
				this.offset++;
			}
	    }
		this.buffer[this.offset]=0x00;
		this.offset++;
	};
	
	this.readUInt8VarArray = function readUInt8VarArray(){
		var size = this.buffer.readUInt32LE(this.offset);
		var dataBlock = new Buffer(size);
		for(var i=0; i<size; i++){
			dataBlock[i]=this.buffer[this.offset];
			this.offset++;
		}
		return dataBlock;
	};
	
	this.writeUInt8VarArray = function writeUInt8VarArray(dataBlock){
		this.buffer.writeUInt32LE(dataBlock.length, this.offset);
		this.offset+=4;
		for(var i=0; i<dataBlock.length; i++){
			this.buffer[this.offset]= dataBlock[i];
			this.offset++;
		}
	};
	
	this.readUInt8 = function readUInt8(){
		var result = this.buffer[this.offset];
		this.offset++;
		return result;
	};
	
	this.readUInt16 = function readUInt16(){
		var result = this.buffer.readUInt16LE(this.offset);
		this.offset+=2;
		return result;
	};
	
	this.readUInt32 = function readUInt32(){
		var result = this.buffer.readUInt32LE(this.offset);
		this.offset+=4;
		return result;
	};
	
	this.readUInt64 = function readUInt64(){
		var result = this.buffer.readDoubleLE(this.offset);
		this.offset+=8;
		return result;
	};
	
	this.writeUInt8 = function writeUInt8(value){
		this.buffer.writeUInt8(value, this.offset);
		this.offset+=1;
	}
	
	this.writeUInt16 = function writeUInt16(value){
		this.buffer.writeUInt16LE(value, this.offset);
		this.offset+=2;
	};
	
	this.writeUInt32 = function writeUInt32(value){
		this.buffer.writeUInt32LE(value, this.offset);
		this.offset+=4;
	};
	
	this.writeUInt64 = function writeUInt64(value){
		this.buffer.writeDoubleLE(value, this.offset);
		this.offset+=8;
	};
	
	this.getScrambledBuffer = function getScrambledBuffer(){
		
	};
	
	this.toString = function toString(){
		return this.buffer.toString('hex');	
	};
	
};


module.exports = IptBuffer;


