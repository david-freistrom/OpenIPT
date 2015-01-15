/**
 * New node file
 */
var msgPushDataTransferRequest = function(){
	this.channelNumber = undefined;
	this.dataSourceId = undefined;
	this.status = undefined;
	this.blockNumber = undefined;
	this.dataBlock = undefined;
	
	this.parse = function(buffer) {					
	};
	
	this.write = function(buffer) {			
	};
};

module.exports = msgPushDataTransferRequest;