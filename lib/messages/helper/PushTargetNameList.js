/**
 * New node file
 */
var validator = require('validator');

var pushTargetNameListEntries;

function PushTargetNameList(){
	pushTargetNameListEntries = [];
};

PushTargetNameList.prorotype.addPushTargetNameListEntry = function addPushTargetNameListEntry(value){
	pushTargetNameListEntries.push(value);
};

PushTargetNameList.prorotype.removePushTargetNameListEntry = function removePushTargetNameListEntry(value){
	//ushTargetNameListEntries.delete(value);
};

PushTargetNameList.prorotype.getPushTargetNameListEntries = function getPushTargetNameListEntries(){
	return pushTargetNameListEntries;
};

PushTargetNameList.prorotype.write = function write(buffer) {		
	//pushTargetNameListEntry.write(buffer);
};

PushTargetNameList.prorotype.getSize = function getSize(){
	var size = 0;
	//size += pushTargetNameListEntry.getSize();
	return size;
};

PushTargetNameList.parse = function parse(buffer) {
	var message = new PushTargetNameList();
	//message.setPushTargetNameListEntry(PushTargetNameListEntry.parse(buffer));
	
	return message;
};

module.exports = PushTargetNameList;