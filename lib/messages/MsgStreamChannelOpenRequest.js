/**
 * New node file
 */
function MsgStreamChannelOpenRequest(){
	this.sourceName = undefined;
	this.streamNumber = undefined;
	this.ackTimeout = undefined;
	this.maxPacketSize = undefined;
	this.maxWindowSize = undefined;
	
	this.parse = function parse(buffer) {					
	};
	
	this.write = function write(buffer) {			
	};
};

module.exports = MsgStreamChannelOpenRequest;