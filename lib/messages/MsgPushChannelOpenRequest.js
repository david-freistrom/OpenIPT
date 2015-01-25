/**
 * New node file
 */
function MsgPushChannelOpenRequest(){
	this.target = undefined;
	this.ackTimeout = undefined;
	
	this.parse = function parse(buffer) {					
	};
	
	this.write = function write(buffer) {			
	};
};

module.exports = MsgPushChannelOpenRequest;