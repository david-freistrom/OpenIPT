/**
 * New node file
 */
var msgStreamChannelOpenRequest = function(){
	this.sourceName = undefined;
	this.streamNumber = undefined;
	this.ackTimeout = undefined;
	this.maxPacketSize = undefined;
	this.maxWindowSize = undefined;
	
	this.parse = function(buffer) {					
	};
	
	this.write = function(buffer) {			
	};
};

module.exports = msgStreamChannelOpenRequest;