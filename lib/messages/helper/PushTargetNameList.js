/**
 * New node file
 */
var validator = require('validator');

var pushTargetNameListEntries=[];

function PushTargetNameList(){

	this.addPushTargetNameListEntry = function addPushTargetNameListEntry(value){
		pushTargetNameListEntries.push(value);
	};
	
	this.removePushTargetNameListEntry = function removePushTargetNameListEntry(value){
		//ushTargetNameListEntries.delete(value);
	};
	
	this.getPushTargetNameListEntries = function getPushTargetNameListEntries(){
		return pushTargetNameListEntries;
	};
	
	this.write = function write(buffer) {		
		//pushTargetNameListEntry.write(buffer);
	};
	
	this.getSize = function getSize(){
		var size = 0;
		//size += pushTargetNameListEntry.getSize();
		return size;
	};
};

PushTargetNameList.parse = function parse(buffer) {
	var message = new PushTargetNameList();
	//message.setPushTargetNameListEntry(PushTargetNameListEntry.parse(buffer));
	
	return message;
};

module.exports = PushTargetNameList;