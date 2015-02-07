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
		    expect(iptBuffer.getBuffer()).to.be.instanceof(Buffer);
		    //expect(iptBuffer.getBuffer()).to.be.equal(buffer);
		});
		  
		it("should set this.buffer to a given Buffer cleaned by started escape sequence", function(){	    	   
			var buffer = new Buffer("1bffff", 'hex');
			var iptBuffer = new IptBuffer(buffer);
		    expect(iptBuffer.getBuffer()).to.be.instanceof(Buffer);
		    expect(iptBuffer.getBuffer().toString('hex')).to.be.equal("ffff");
		});
		  
		it("should set this.offset to 0", function(){	    	   
			var iptBuffer = new IptBuffer();
			expect(iptBuffer.getOffset()).to.be.equal(0);
		});
	});
	
	describe("getLength()", function(){
		
	    it("should set length to given buffer size", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer('ffff', 'hex'));
			expect(iptBuffer.getLength()).to.be.equal(2);
		});
	    
	    it("should set length to MAX_BUFFER_SIZE", function(){	    	   
			var iptBuffer = new IptBuffer();
		    expect(iptBuffer.getBuffer()).to.be.instanceof(Buffer);
		    expect(iptBuffer.getLength()).to.be.equal(Constants.MAX_BUFFER_SIZE);	    
		});
	});
	
	describe("readUInt8String()", function(){
		
	    it("should return given string from buffer", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer("Hello World!"+String.fromCharCode(parseInt('00', 16))));
			expect(iptBuffer.readUInt8String()).to.be.equal("Hello World!");
		});
	});
	
	describe("writeUInt8String()", function(){
		
	    it("should write a given string to iptBuffer", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer(13));
			iptBuffer.writeUInt8String("Hello World!");
			expect(iptBuffer.getOffset()).to.be.equal(13);
			expect(iptBuffer.getLength()).to.be.equal(13);
			expect(iptBuffer.getBuffer().toString()).to.be.equal("Hello World!"+String.fromCharCode(parseInt('00', 16)));
		});
	});
	
    describe("readUInt8VarArray()", function(){
		
	    it("should return a 15 byte UInt8 Array from buffer", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer("0f000000010203040506070809000102030405", 'hex'));
			expect(iptBuffer.readUInt8VarArray().toString('hex')).to.be.equal("010203040506070809000102030405");
		});
	});
	
	describe("writeUInt8VarArray()", function(){
		
	    it("should write a given 15 byte UInt8 Array to iptBuffer", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer(19));
			iptBuffer.writeUInt8VarArray(new Buffer("010203040506070809000102030405", 'hex'));
			expect(iptBuffer.getOffset()).to.be.equal(19);
			expect(iptBuffer.getLength()).to.be.equal(19);
			expect(iptBuffer.getBuffer().toString('hex')).to.be.equal("0f000000010203040506070809000102030405");
		});
	});
	
	describe("readUInt8Array()", function(){
		
	    it("should return a 32 byte UInt8 Array from buffer", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer("0102030405060708090001020304050607080900010203040506070809000001", 'hex'));
			expect(iptBuffer.readUInt8Array().toString('hex')).to.be.equal("0102030405060708090001020304050607080900010203040506070809000001");
		});
	});
	
	describe("writeUInt8Array()", function(){
		
	    it("should write a given 32 byte UInt8 Array to iptBuffer", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer(32));
			iptBuffer.writeUInt8Array(new Buffer("0102030405060708090001020304050607080900010203040506070809000001", 'hex'));
			expect(iptBuffer.getOffset()).to.be.equal(32);
			expect(iptBuffer.getLength()).to.be.equal(32);
			expect(iptBuffer.getBuffer().toString('hex')).to.be.equal("0102030405060708090001020304050607080900010203040506070809000001");
		});
	});
	
	describe("readUInt8()", function(){
		
	    it("should return a UInt8 value from iptBuffer", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer("01", 'hex'));
			expect(iptBuffer.readUInt8()).to.be.equal(1);
		});
	});
	
	describe("writeUInt8()", function(){
		
	    it("should write a UInt8 value to iptBuffer", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer(1));
			iptBuffer.writeUInt8(1);
			expect(iptBuffer.getOffset()).to.be.equal(1);
			expect(iptBuffer.getLength()).to.be.equal(1);
			expect(iptBuffer.getBuffer().toString('hex')).to.be.equal("01");
		});
	});
	
	describe("readUInt16()", function(){
		
	    it("should return a LE UInt16 value from iptBuffer", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer("0201", 'hex'));
			expect(iptBuffer.readUInt16()).to.be.equal(258);
		});
	});
	
	describe("writeUInt16()", function(){
		
	    it("should write a LE UInt16 value to iptBuffer", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer(2));
			iptBuffer.writeUInt16(258);
			expect(iptBuffer.getOffset()).to.be.equal(2);
			expect(iptBuffer.getLength()).to.be.equal(2);
			expect(iptBuffer.getBuffer().toString('hex')).to.be.equal("0201");
		});
	});
	
	describe("readUInt32()", function(){
		
	    it("should return a LE UInt32 value from iptBuffer", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer("04030201", 'hex'));
			expect(iptBuffer.readUInt32()).to.be.equal(16909060);
		});
	});
	
	describe("writeUInt16()", function(){
		
	    it("should write a LE UInt32 value to iptBuffer", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer(4));
			iptBuffer.writeUInt32(16909060);
			expect(iptBuffer.getOffset()).to.be.equal(4);
			expect(iptBuffer.getLength()).to.be.equal(4);
			expect(iptBuffer.getBuffer().toString('hex')).to.be.equal("04030201");
		});
	});
	
	describe("readUInt64()", function(){
		
	    xit("should return a UInt64 value from iptBuffer", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer("0807060504030201", 'hex'));
			expect(iptBuffer.readUInt64()).to.be.equal(72623859790382850);
		});
	});
	
	describe("writeUInt64()", function(){
		
	    xit("should write a UInt64 value to iptBuffer", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer(8));
			iptBuffer.writeUInt64(72623859790382850);
			expect(iptBuffer.getOffset()).to.be.equal(8);
			expect(iptBuffer.getLength()).to.be.equal(8);
			expect(iptBuffer.getBuffer().toString('hex')).to.be.equal("0807060504030201");
		});
	});
	
	describe("getScrambledBuffer()", function(){
		
	    it("should return the scrambled iptBuffer", function(){	    	   
			var buffer = new Buffer("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 'hex');
			var iptBuffer = new IptBuffer(buffer);

			expect(iptBuffer.getScrambledBuffer(Constants.DEFAULT_SCRAMBLE_KEY).toString('hex')).to.be.equal("fefdfcfbfaf9f8f7f6fffefdfcfbfaf9f8f7f6fffefdfcfbfaf9f8f7f6fffffefefdfcfb");
		});
	});
});