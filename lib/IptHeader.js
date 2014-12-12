/**
 * New node file
 */

var iptHeader = function(){
	this.commandTag = undefined;
	this.sequenceNumber = undefined;
	this.reserved = undefined;
	this.len = undefined;
	this.connectionId = undefined;
	this.size = undefined;
	
	this.parse = function(buffer) {
		this.commandTag = buffer.readUInt16LE(0);
		this.sequenceNumber = buffer.readUInt8(2);
		this.reserved = buffer.readUInt8(3);
		this.len = buffer.readUInt32LE(4);
		
		console.log("");
		console.log("##############    HEADER START   ###################");
		
		if(this.reserved===0x00){
			console.log("Header for single transport channel version.")
			this.size=8;
		} else if(this.reserved===0x01){
			console.log("Header for multi transport channel version.")
			this.connectionId = buffer.readUInt16LE(8);
			this.size=10;
		} else {
			console.log("Unknown Header!")
		}
		
		console.log("Sequence number: "+this.sequenceNumber.toString());
		console.log("Reserved: "+this.reserved.toString(16));
		console.log("Length: "+this.len.toString());
		if(this.connectionId!=undefined){
			console.log("Connection ID: "+this.connectionId.toString());
		}
		
		console.log("##############    HEADER END   ###################");
		console.log("");
	}
	
	this.write= function(buffer){
		console.log("Buffer length: "+buffer.length);
		console.log("Command Tag: "+this.commandTag.toString(16));
		console.log("Sequence Number: "+this.sequenceNumber.toString(16));
		console.log("Reserved: "+this.reserved.toString(16));
		console.log("Len: "+this.len.toString());
		
		buffer.writeUInt16LE(this.commandTag,0);
		buffer.writeUInt8(this.sequenceNumber,2);
		buffer.writeUInt8(this.reserved,3);
		buffer.writeUInt32LE(this.len,4);
		if(this.reserved===0x01){
			buffer.writeUInt16LE(this.reserved,8);
		}
	}
};

module.exports = iptHeader;
