/**
 * New node file
 */
function MsgPushChannelOpenResponse(){
	this.response = undefined;
	this.channelNumber = undefined;
	this.dataSourceId = undefined;
	this.maxPacketSize = undefined;
	this.maxWindowSize = undefined;
	this.status = undefined;
	this.targetCount = undefined;
	
	this.parse = function parse(buffer) {					
	};
	
	this.write = function write(buffer) {			
	};
};

module.exports = MsgPushChannelOpenResponse;