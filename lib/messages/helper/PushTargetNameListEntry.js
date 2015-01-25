/**
 * New node file
 */
function PushTargetNameListEntry(){
	this.targetName = undefined;
	this.account = undefined;
	this.address = undefined;
	this.version = undefined;
	this.deviceId = undefined;
	this.transferStatus = undefined;
	
	this.parse = function parse(buffer) {					
	};
	
	this.write = function write(buffer) {			
	};
};

module.exports = PushTargetNameListEntry;