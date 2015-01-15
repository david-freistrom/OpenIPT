/**
 * New node file
 */

var Constants = require('./Constants');
var Utils = require('./Utils');

var iptBuffer = function(buffer){
	// Check Escape Sequence for Push Operations
	if(buffer[0]===Constants.ESCAPE_SEQUENCE){
		this.buffer = buffer.slice(1,buffer.length);
	} else {
		this.buffer=buffer;
	}
	this.offset = 0;
	this.length = buffer.length;
	
	this.readUInt8String = function() {
	    var string="";
		for(this.offset; this.offset<this.length; this.offset++){
	    	if(this.buffer[this.offset]!=0x00){
				string+=this.buffer.slice(this.offset,this.offset+1).toString();
				if(this.buffer[this.offset]==Constants.ESCAPE_SEQUENCE && this.buffer[this.offset+1]==Constants.ESCAPE_SEQUENCE){
	    			this.offset+=2;
	    		} else {
	    			this.offset++;
	    		}
			} else {
				console.log("Found END-Sequence!");
				this.offset++;
				break;
			}
	    }
		return string;
	};
	
	this.writeUInt8String = function(string) {
		for(var i=0; i<string.length; i++){
			this.buffer[offset]=string[i];
			if(string[i]==Constants.ESCAPE_SEQUENCE){
				this.buffer[offset+1]=string[i];
				this.offset+=2;
			} else {
				this.offset++;
			}
	    }
		this.buffer[offset]=0x00;
		this.buffer++;
	};
	
	this.readUInt8StringInt8 = function(){
		var result = this.buffer[this.offset];
		this.offset++;
		return result;
	}
	
	this.readUInt16 = function(){
		var result = this.buffer.readUInt16LE();
		this.offset+=2;
		return result;
	}
	
	this.readUInt32 = function(){
		var result = this.buffer.readUInt32LE();
		this.offset+=4;
		return result;
	}
	
	this.readUInt64 = function(){
		var result = this.buffer.readUInt64LE();
		this.offset+=8;
		return result;
	}
	
	this.writeUInt8 = function(value){
		this.buffer.writeUInt8(value);
		this.length = this.buffer.length;
	}
	
	this.writeUInt16 = function(value){
		this.buffer.writeUInt16LE(value);
		this.length = this.buffer.length;
	}
	
	this.writeUInt32 = function(value){
		this.buffer.writeUInt16LE(value);
		this.length = this.buffer.length;
	}
	
	this.writeUInt64 = function(value){
		this.buffer.writeUInt64LE(value);
		this.length = this.buffer.length;
	}
	
	this.getScrambledBuffer = function(){
		
	}
	
};


module.exports = iptBuffer;



