/**
 * New node file
 */
var validator = require('validator');

var Constants = require('./Constants');

module.exports = {
		scrambleContentWithDefaultKey: function(buffer){
			
			console.log("");
			console.log("##############    SCRAMBLE CONTENT WITH DEFAULT KEY START  ###################");
			
			var defaultScrambleKey = Constants.DEFAULT_SCRAMBLE_KEY;
			
			console.log("Content: "+buffer.toString('hex'));
			console.log("Scramble Key: "+defaultScrambleKey.toString('hex'));
			console.log("Key-length: "+defaultScrambleKey.length);
			console.log("Content-length: "+buffer.length);
			
			var scrambledContent=new Buffer(buffer.length); 
			
			var offset = 0;
			for(var i=0; i<buffer.length; i++){			
				var result = buffer.readUInt8(i)^defaultScrambleKey.readUInt8(offset);
				
				scrambledContent[i]=result;
				offset>=31 ? offset=0 : offset++;
			}
			
			console.log("##############    SCRAMBLE CONTENT WITH DEFAULT KEY END  ###################");
			console.log("");
			
			return scrambledContent;
		},		

		scrambleContent: function(buffer, scrambleKey, offset){
			
			console.log("");
			console.log("##############    SCRAMBLE CONTENT START  ###################");
	
			console.log("Content: "+buffer.toString('hex'));
			console.log("Scramble Key: "+scrambleKey.toString('hex'));
			console.log("Scramble-Key-Offset: "+offset)
			console.log("Key-length: "+scrambleKey.length);
			console.log("Content-length: "+buffer.length);
			
			var scrambledContent=new Buffer(buffer.length); 
	
			for(var i=0; i<buffer.length; i++){
				var result = buffer.readUInt8(i)^scrambleKey.readUInt8(offset);
				
				scrambledContent[i]=result;
				offset>=31 ? offset=0 : offset++;
			}
			
			console.log("Scrambled Content: "+scrambledContent.toString('hex'));
			
			console.log("##############    SCRAMBLE CONTENT END  ###################");
			console.log("");
			
			return scrambledContent;
		},
		
		string2hex: function(str){
				var hex = '';
				for(var i=0;i<str.length;i++) {
					hex += ''+str.charCodeAt(i).toString(16);
				}
				console.log(hex);
				return hex;
		}
}