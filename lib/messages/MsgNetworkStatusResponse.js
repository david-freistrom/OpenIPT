/**
 * New node file
 */
function MsgNetworkStatusResponse(){
	this.deviceType = undefined;
	this.status1 = undefined;
	this.status2 = undefined;
	this.status3 = undefined;
	this.status4 = undefined;
	this.status5 = undefined;
	this.status6 = undefined;
	this.status7 = undefined;
	
	this.parse = function parse(buffer) {					
	};
	
	this.write = function write(buffer) {			
	};
};

module.exports = MsgNetworkStatusResponse;