/**
 * New node file
 */
var validator = require('validator');

function IptHelper(){
};

IptHelper.scrambleBuffer = function scranmbleBuffer(buffer, scrambleKey, scrambleKeyOffset){
	
	var scrambledBuffer=new Buffer(buffer.length); 
	
	var idx=scrambleKeyOffset;
	for(var i=0; i<buffer.length; i++){
		var result = buffer.readUInt8(i)^scrambleKey.readUInt8(idx);	
		scrambledBuffer.writeUInt8(result, i);
		idx>=31 ? idx=0 : idx++;
	}
	return scrambledBuffer;
};


module.exports = IptHelper;



