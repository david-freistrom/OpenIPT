/**
 * New node file
 */
function PushTargetNameReq(){
	this.targetName = undefined;
	this.account = undefined;
	this.address = undefined;
	this.version = undefined;
	this.deviceId = undefined;
	
	this.parse = function parse(buffer) {					
	};
	
	this.write = function write(buffer) {			
	};
};

module.exports = PushTargetNameReq;