/**
 * New node file
 */
function MsgStreamDataTransferResponse(){
	this.response = undefined;
	this.streamNumber = undefined;
	this.blockNumber = undefined;
	this.status = undefined;
	
	this.parse = function parse(buffer) {					
	};
	
	this.write = function write(buffer) {			
	};
};

module.exports = MsgStreamDataTransferResponse;