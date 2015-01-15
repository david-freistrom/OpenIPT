/**
 * New node file
 */
var pushTargetNameListEntry = function(){
	this.targetName = undefined;
	this.account = undefined;
	this.address = undefined;
	this.version = undefined;
	this.deviceId = undefined;
	this.transferStatus = undefined;
	
	this.parse = function(buffer) {					
	};
	
	this.write = function(buffer) {			
	};
};

module.exports = pushTargetNameListEntry;