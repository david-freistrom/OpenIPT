/**
 * New node file
 */
function MsgPushDataTransferRequest(){
	this.channelNumber = undefined;
	this.dataSourceId = undefined;
	this.status = undefined;
	this.blockNumber = undefined;
	this.dataBlock = undefined;
	
	this.parse = function parse(buffer) {					
	};
	
	this.write = function write(buffer) {			
	};
};

module.exports = MsgPushDataTransferRequest;