/**
 * New node file
 */

var address;

function MsgConnectionOpenRequest(){
	
	this.setAddress = function setAddress(value){
		address = value;
	};
	
	this.getAddress = function getAddress(){
		return address;
	};
	
	this.write = function(buffer) {	
		console.log("Address [length]: "+address+" ["+address.length+"]");
		buffer.writeUInt8String(address);
	};
	
	this.getSize = function getSize(){
		var size = 0;
		size += address.length;
		return size;
	};
};


MsgConnectionOpenRequest.parse = function parse(buffer) {
	var message = new MsgConnectionOpenRequest();
	message.setAddress(buffer.readUInt8String());
	
	return message;
};

module.exports = MsgConnectionOpenRequest;