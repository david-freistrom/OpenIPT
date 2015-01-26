/**
 * New node file
 */

var pushTargetNameListEntry;

function PushTargetNameList(){

	this.setPushTargetNameListEntry = function setPushTargetNameListEntry(value){
		pushTargetNameListEntry = value;
	};
	
	this.getPushTargetNameListEntry = function getPushTargetNameListEntry(){
		return pushTargetNameListEntry;
	};
	
	this.write = function write(buffer) {		
		pushTargetNameListEntry.write(buffer);
	};
	
	this.getSize = function getSize(){
		var size = 0;
		size += pushTargetNameListEntry.getSize();
		return size;
	};
};

PushTargetNameList.parse = function parse(buffer) {
	var message = new PushTargetNameList();
	message.setPushTargetNameListEntry(PushTargetNameListEntry.parse(buffer));
	
	return message;
};

module.exports = PushTargetNameList;