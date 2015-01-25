/**
 * New node file
 */
function MsgStreamDataTransferRequest(){
	this.streamNumber = undefined;
	this.blockNumber = undefined;
	this.dataBlock = undefined;
	this.status = undefined;
	
	this.parse = function parse(buffer) {					
	};
	
	this.write = function write(buffer) {			
	};
};

module.exports = MsgStreamDataTransferRequest;