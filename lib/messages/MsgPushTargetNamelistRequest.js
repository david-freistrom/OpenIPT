/**
 * New node file
 */
function MsgPushTargetNamelistRequest(){
	this.pushTargetNameListFilter = undefined;
	this.reactionTime = undefined;
	this.newAddress = undefined;
	this.countConfirmed = undefined;
	
	this.parse = function parse(buffer) {					
	};
	
	this.write = function write(buffer) {			
	};
};

module.exports = MsgPushTargetNamelistRequest;