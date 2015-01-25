/**
 * New node file
 */
function MsgStreamChannelOpenResponse(){
	this.response = undefined;
	this.streamNumber = undefined;
	this.maxPacketSize = undefined;
	this.maxWindowSize = undefined;
	this.status = undefined;
	
	this.parse = function parse(buffer) {					
	};
	
	this.write = function write(buffer) {			
	};
};

module.exports = MsgStreamChannelOpenResponse;