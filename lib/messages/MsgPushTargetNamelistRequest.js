/**
 * New node file
 */
var validator = require('validator');
var Constants = require('../Constants');

var pushTargetNameListFilter;

function MsgPushTargetNamelistRequest(){
	pushTargetNameListFilter = undefined;
};

MsgPushTargetNamelistRequest.prototype.setPushTargetNameListFilter = function setPushTargetNameListFilter(value){
	pushTargetNameListFilter = value;
};

MsgPushTargetNamelistRequest.prototype.getPushTargetNameListFilter = function getPushTargetNameListFilter(){
	return pushTargetNameListFilter;
};

MsgPushTargetNamelistRequest.prototype.write = function write(buffer) {
	pushTargetNameListFilter.write(buffer);
};

MsgPushTargetNamelistRequest.prototype.getSize = function getSize(){
	var size = 0;
	size += pushTargetNameListFilter.getSize();

	return size;
};

MsgPushTargetNamelistRequest.prototype.toString = function toString(){
	var str = "";
	str+=pushTargetNameListFilter.toString();
	return str;
};

MsgPushTargetNamelistRequest.prototype.getResponseTag = function getResponseTag(){
	return Constants.PUSH_TARGET_NAMELIST_RESPONSE;
};

MsgPushTargetNamelistRequest.parse = function parse(buffer) {
	var message = new MsgPushTargetNamelistRequest();
	message.setPushTargetNameListFilter(PushTargetNameListFilter.parse(buffer));
	
	return message;
};

module.exports = MsgPushTargetNamelistRequest;