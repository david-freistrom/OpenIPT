var chai = require('chai');
chai.use(require('chai-change'));

var expect = require("chai").expect;
var should = require('chai').should;

describe("IptBuffer", function() {

	var IptBuffer = require("../lib/IptBuffer");
	var Constants = require('../lib/Constants');
		   
	describe("IptBuffer(buffer)", function(){
				  
		it("should set this.buffer to a given Buffer", function(){	   
			var buffer = new Buffer("ffff", 'hex');
			var iptBuffer = new IptBuffer(buffer);
		    expect(iptBuffer.buffer).to.be.instanceof(Buffer);
		    expect(iptBuffer.buffer).to.be.equal(buffer);
		});
		  
		it("should set this.buffer to a given Buffer cleaned by started escape sequence", function(){	    	   
			var buffer = new Buffer("1bffff", 'hex');
			var iptBuffer = new IptBuffer(buffer);
		    expect(iptBuffer.buffer).to.be.instanceof(Buffer);
		    expect(iptBuffer.buffer.toString('hex')).to.be.equal("ffff");
		});
		  
		it("should set this.offset to 0", function(){	    	   
			var iptBuffer = new IptBuffer();
			expect(iptBuffer.offset).to.be.equal(0);
		});
	});
	
	describe("getLength()", function(){
		
	    it("should set length to given buffer size", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer('ffff', 'hex'));
			expect(iptBuffer.getLength()).to.be.equal(2);
		});
	    
	    it("should set length to MAX_BUFFER_SIZE", function(){	    	   
			var iptBuffer = new IptBuffer();
		    expect(iptBuffer.buffer).to.be.instanceof(Buffer);
		    expect(iptBuffer.getLength()).to.be.equal(Constants.MAX_BUFFER_SIZE);	    
		});
	});
	
	describe("readUInt8String()", function(){
		
	    it("should return given string from buffer", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer("Hello World!"+String.fromCharCode(parseInt('00', 16))));
			expect(iptBuffer.readUInt8String()).to.be.equal("Hello World!");
		});
	});
	
	
});