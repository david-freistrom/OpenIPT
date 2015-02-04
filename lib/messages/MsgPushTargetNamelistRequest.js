/**
 * New node file
 */
var validator = require('validator');

var pushTargetNameListFilter;

function MsgPushTargetNamelistRequest(){
	
	this.setPushTargetNameListFilter = function setPushTargetNameListFilter(value){
		pushTargetNameListFilter = value;
	};
	
	this.getPushTargetNameListFilter = function getPushTargetNameListFilter(){
		return pushTargetNameListFilter;
	};
	
	this.write = function write(buffer) {
		pushTargetNameListFilter.write(buffer);
	};

	this.getSize = function getSize(){
		var size = 0;
		size += pushTargetNameListFilter.getSize();
	
		return size;
	};
};

MsgPushTargetNamelistRequest.parse = function parse(buffer) {
	var message = new MsgPushTargetNamelistRequest();
	message.setPushTargetNameListFilter(PushTargetNameListFilter.parse(buffer));
	
	return message;
};

module.exports = MsgPushTargetNamelistRequest;