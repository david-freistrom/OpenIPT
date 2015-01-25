/**
 * New node file
 */
function MsgUnknownCommandResponse(){
	this.unknownRequestCommand = undefined;
	
	this.parse = function parse(buffer) {			
		this.unknownRequestCommand = buffer.readUInt16();	
	};
	
	this.write = function write(buffer) {			
		buffer.writeUInt16(this.unknownRequestCommand);		
	};
};

module.exports = MsgUnknownCommandResponse;
