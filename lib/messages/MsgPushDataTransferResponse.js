/**
 * New node file
 */
function MsgPushDataTransferResponse(){
	this.response = undefined;
	this.channelNumber = undefined;
	this.dataSourceId = undefined;
	this.status = undefined;
	this.blockNumber = undefined;
	
	this.parse = function parse(buffer) {					
	};
	
	this.write = function write(buffer) {			
	};
};

module.exports = MsgPushDataTransferResponse;