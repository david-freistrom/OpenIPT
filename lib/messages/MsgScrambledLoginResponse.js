/**
 * New node file
 */
var Utils = require('../Utils');

function MsgScrambledLoginResponse(){
	this.response = undefined;
	this.reactionTime = undefined;
	this.newAddress = undefined;
	
	
	this.parse = function parse(buffer) {					
	};
	
	this.write = function write(buffer) {

		console.log("Response: "+this.response.toString(16));
		console.log("Reaction time: "+this.reactionTime.toString(16));
		console.log("New Address [lenght]: "+this.newAddress.toString()+" ["+this.newAddress.length+"]");
		
		//var content = new Buffer(3+this.newAddress.length+1);
		buffer.writeUInt8(this.response,8);
		buffer.writeUInt16LE(this.reactionTime,9);
		
		//console.log("Buffer length: "+content.length);
		
		buffer.write(this.newAddress,11,this.newAddress.length, 'utf8');
		buffer[buffer.length-1]=0x00;
		
		//buffer = Buffer.concat([buffer,content]);
		console.log("Buffer length: "+buffer.length);
				
	};
};

module.exports = MsgScrambledLoginResponse;