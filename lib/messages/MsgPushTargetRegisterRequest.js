/**
 * New node file
 */
function MsgPushTargetRegisterRequest(){
	this.targetName = undefined;
	this.maxPacketSize = undefined;
	this.maxWindowSize = undefined;
	
	
	this.parse = function parse(buffer) {					
	};
	
	this.write = function write(buffer) {			
	};
};

module.exports = MsgPushTargetRegisterRequest;