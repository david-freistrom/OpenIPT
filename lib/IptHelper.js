/**
 * New node file
 */
var validator = require('validator');

function IptHelper(){
};

IptHelper.scrambleBuffer = function scrambleBuffer(buffer, scrambleKey, scrambleKeyOffset){
	
	var scrambledBuffer=new Buffer(buffer.length); 
	
	for(var i=0; i<buffer.length; i++){
		var result = buffer.readUInt8(i)^scrambleKey.readUInt8(scrambleKeyOffset);	
		scrambledBuffer.writeUInt8(result, i);
		scrambleKeyOffset>=31 ? scrambleKeyOffset=0 : scrambleKeyOffset++;
	}
	return {'scrambledBuffer': scrambledBuffer, 'scrambleOffset': scrambleKeyOffset };
};


module.exports = IptHelper;



