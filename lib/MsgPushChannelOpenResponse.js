/**
 * New node file
 */
var msgPushChannelOpenResponse = function(){
	this.response = undefined;
	this.channelNumber = undefined;
	this.dataSourceId = undefined;
	this.maxPacketSize = undefined;
	this.maxWindowSize = undefined;
	this.status = undefined;
	this.targetCount = undefined;
	
	this.parse = function(buffer) {					
	};
	
	this.write = function(buffer) {			
	};
};

module.exports = msgPushChannelOpenResponse;