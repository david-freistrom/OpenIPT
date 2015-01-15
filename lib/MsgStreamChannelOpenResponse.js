/**
 * New node file
 */
var msgStreamChannelOpenResponse = function(){
	this.response = undefined;
	this.streamNumber = undefined;
	this.maxPacketSize = undefined;
	this.maxWindowSize = undefined;
	this.status = undefined;
	
	this.parse = function(buffer) {					
	};
	
	this.write = function(buffer) {			
	};
};

module.exports = msgStreamChannelOpenResponse;