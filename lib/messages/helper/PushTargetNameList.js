var validator = require('validator');

var pushTargetNameListEntries;

function PushTargetNameList(){
	pushTargetNameListEntries = [];
};

PushTargetNameList.prototype.addPushTargetNameListEntry = function addPushTargetNameListEntry(value){
	pushTargetNameListEntries.push(value);
};

PushTargetNameList.prototype.removePushTargetNameListEntry = function removePushTargetNameListEntry(value){
	//pushTargetNameListEntries.delete(value);
};

PushTargetNameList.prototype.getPushTargetNameListEntries = function getPushTargetNameListEntries(){
	return pushTargetNameListEntries;
};

PushTargetNameList.prototype.write = function write(buffer) {		
	//pushTargetNameListEntry.write(buffer);
};

PushTargetNameList.prototype.getSize = function getSize(){
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