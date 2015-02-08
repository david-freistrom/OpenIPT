/**
 * New node file
 */
var validator = require('validator');
var Constants = require('../Constants');

function MsgPushTargetNamelistRequest(){
	this.pushTargetNameListFilter = undefined;
};

MsgPushTargetNamelistRequest.prototype.setPushTargetNameListFilter = function setPushTargetNameListFilter(value){
	this.pushTargetNameListFilter = value;
};

MsgPushTargetNamelistRequest.prototype.getPushTargetNameListFilter = function getPushTargetNameListFilter(){
	return this.pushTargetNameListFilter;
};

MsgPushTargetNamelistRequest.prototype.write = function write(buffer) {
	this.pushTargetNameListFilter.write(buffer);
};

MsgPushTargetNamelistRequest.prototype.getSize = function getSize(){
	return this.pushTargetNameListFilter.getSize();
};

MsgPushTargetNamelistRequest.prototype.toString = function toString(){
	var str = "";
	str+=this.pushTargetNameListFilter.toString();
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