function PushTargetNameList(){	this.pushTargetNameListEntries = [];
};

PushTargetNameList.prototype.addPushTargetNameListEntry = function addPushTargetNameListEntry(value){
	this.pushTargetNameListEntries.push(value);
};

PushTargetNameList.prototype.getPushTargetNameListEntries = function getPushTargetNameListEntries(){
	return this.pushTargetNameListEntries;
};

PushTargetNameList.prototype.write = function write(buffer) {		
	for(entry in this.pushTargetNameListEntries){
		entry.write(buffer);
	}
};

PushTargetNameList.prototype.getSize = function getSize(){
	var size = 0;
	for(entry in this.puhsTargetNameListEntries){
		size+=entry.getSize();
	}
	return size;
};

PushTargetNameList.prototype.toString = function toString(){
	var str = "";
	for(entry in this.puhsTargetNameListEntries){
		str+=entry.toString();
	}
	return str;
};

PushTargetNameList.parse = function parse(buffer) {
	var message = new PushTargetNameList();
	//message.setPushTargetNameListEntry(PushTargetNameListEntry.parse(buffer));
	
	return message;
};

module.exports = PushTargetNameList;