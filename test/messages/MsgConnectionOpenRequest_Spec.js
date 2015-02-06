var chai = require('chai');
chai.use(require('chai-change'));

var expect = require("chai").expect;
var should = require('chai').should;

// Specs for MsgDeviceTimeResponse
describe("MsgConnectionOpenRequest", function() {

	var MsgConnectionOpenRequest = require("../../lib/messages/MsgConnectionOpenRequest");
	var msgConnectionOpenRequest;
		
	before(function() {
	})
		  
	after(function(){
	})
		  
	beforeEach(function(){
		msgConnectionOpenRequest = new MsgConnectionOpenRequest();
	})
		  
	afterEach(function(){
	})
	  
	describe("getTargetAddress() / setTargetAddress()", function(){
		it("should set and get instance variable targetAddress for a valid value IP", function(){	    	   
			msgConnectionOpenRequest.setTargetAddress("127.0.0.1");
		    expect(msgConnectionOpenRequest.getTargetAddress()).to.equal("127.0.0.1");
		});
		
		it("should set and get instance variable targetAddress for a valid value IP:PORT", function(){	    	   
			msgConnectionOpenRequest.setTargetAddress("127.0.0.1:1234");
		    expect(msgConnectionOpenRequest.getTargetAddress()).to.equal("127.0.0.1:1234");
		});
		
		it("should set and get instance variable targetAddress for a valid value ans sub address IP:PORT!IP:PORT", function(){	    	   
			msgConnectionOpenRequest.setTargetAddress("127.0.0.1:1234!192.168.1.1:9876");
		    expect(msgConnectionOpenRequest.getTargetAddress()).to.equal("127.0.0.1:1234!192.168.1.1:9876");
		});
		  
		it("should raise a invalid format exception for an invalid IP", function(){	    	   
			expect(function(){msgConnectionOpenRequest.setTargetAddress("invalid.address.format")}).to.throw(Error, "Invalid Target-Address format!");
		});
		  
		it("should raise a invalid format exception for an integer", function(){	    	   
			expect(function(){msgConnectionOpenRequest.setTargetAddress(123)}).to.throw(Error, "Invalid Target-Address format!");
		});
		
		it("should raise a invalid format exception for 127.0.0.1:453454543", function(){	    	   
			expect(function(){msgConnectionOpenRequest.setTargetAddress("127.0.0.1:453454543")}).to.throw(Error, "Invalid Target-Address format!");
		});
		
		it("should raise a invalid format exception for 127.0.0.1:wrong", function(){	    	   
			expect(function(){msgConnectionOpenRequest.setTargetAddress("127.0.0.1:wrong")}).to.throw(Error, "Invalid Target-Address format!");
		});
		
		it("should raise a invalid format exception for 300.0.0.1:12345", function(){	    	   
			expect(function(){msgConnectionOpenRequest.setTargetAddress("300.0.0.1:12345")}).to.throw(Error, "Invalid Target-Address format!");
		});
	});
	
	describe("getSourceAddress() / setSourceAddress()", function(){
		it("should set and get instance variable sourceAddress for a valid value IP", function(){	    	   
			msgConnectionOpenRequest.setSourceAddress("127.0.0.1");
		    expect(msgConnectionOpenRequest.getSourceAddress()).to.equal("127.0.0.1");
		});
		
		it("should set and get instance variable sourceAddress for a valid value IP:PORT", function(){	    	   
			msgConnectionOpenRequest.setSourceAddress("127.0.0.1:1234");
		    expect(msgConnectionOpenRequest.getSourceAddress()).to.equal("127.0.0.1:1234");
		});
		
		it("should set and get instance variable sourceAddress for a valid value ans sub address IP:PORT!IP:PORT", function(){	    	   
			msgConnectionOpenRequest.setSourceAddress("127.0.0.1:1234!192.168.1.1:9876");
		    expect(msgConnectionOpenRequest.getSourceAddress()).to.equal("127.0.0.1:1234!192.168.1.1:9876");
		});
		  
		it("should raise a invalid format exception for an invalid IP", function(){	    	   
			expect(function(){msgConnectionOpenRequest.setSourceAddress("invalid.address.format")}).to.throw(Error, "Invalid Source-Address format!");
		});
		  
		it("should raise a invalid format exception for an integer", function(){	    	   
			expect(function(){msgConnectionOpenRequest.setSourceAddress(123)}).to.throw(Error, "Invalid Source-Address format!");
		});
		
		it("should raise a invalid format exception for 127.0.0.1:453454543", function(){	    	   
			expect(function(){msgConnectionOpenRequest.setSourceAddress("127.0.0.1:453454543")}).to.throw(Error, "Invalid Source-Address format!");
		});
		
		it("should raise a invalid format exception for 127.0.0.1:wrong", function(){	    	   
			expect(function(){msgConnectionOpenRequest.setSourceAddress("127.0.0.1:wrong")}).to.throw(Error, "Invalid Source-Address format!");
		});
		
		it("should raise a invalid format exception for 300.0.0.1:12345", function(){	    	   
			expect(function(){msgConnectionOpenRequest.setSourceAddress("300.0.0.1:12345")}).to.throw(Error, "Invalid Source-Address format!");
		});
	});

	  
	describe("getSize()", function() {
		it("should return 20 for target and source address", function(){
			msgConnectionOpenRequest.setSourceAddress("127.0.0.1");
			msgConnectionOpenRequest.setTargetAddress("127.0.0.1");
			expect(msgConnectionOpenRequest.getSize()).to.equal(20);
		}); 
		
		it("should return 11 for just a source address", function(){
			msgConnectionOpenRequest.setSourceAddress("127.0.0.1");
			expect(msgConnectionOpenRequest.getSize()).to.equal(11);
		}); 
		
		it("should return 10 for just a target address", function(){	
			msgConnectionOpenRequest.setTargetAddress("127.0.0.1");
			expect(msgConnectionOpenRequest.getSize()).to.equal(10);
		}); 
	});
	  
	describe("write()", function() {
		
		var IptBuffer = require('../../lib/IptBuffer');
		
		it("should write combined Address to buffer", function(){	    	   
			msgConnectionOpenRequest.setSourceAddress("127.0.0.1");
			msgConnectionOpenRequest.setTargetAddress("192.168.0.1");
			var iptBuffer = new IptBuffer(new Buffer(msgConnectionOpenRequest.getSize()));		
			var buffer = new Buffer('192.168.0.1'+String.fromCharCode(parseInt('7f', 16))+'127.0.0.1'+String.fromCharCode(parseInt('00', 16)));
			msgConnectionOpenRequest.write(iptBuffer);
			expect(iptBuffer.buffer.toString('hex', 0, 22)).to.equal(buffer.toString('hex', 0, 22));
		}); 
		
		it("should write combined Address with ports to buffer", function(){	    	   
			msgConnectionOpenRequest.setSourceAddress("127.0.0.1:1234");
			msgConnectionOpenRequest.setTargetAddress("192.168.0.1:1234");
			var iptBuffer = new IptBuffer(new Buffer(msgConnectionOpenRequest.getSize()));		
			var buffer = new Buffer('192.168.0.1:1234'+String.fromCharCode(parseInt('7f', 16))+'127.0.0.1:1234'+String.fromCharCode(parseInt('00', 16)));
			msgConnectionOpenRequest.write(iptBuffer);
			expect(iptBuffer.buffer.toString('hex', 0, 27)).to.equal(buffer.toString('hex', 0, 27));
		}); 
		
		it("should write combined Address with subaddresses to buffer", function(){	    	   
			msgConnectionOpenRequest.setSourceAddress("127.0.0.1:1234!127.0.1.2:1234");
			msgConnectionOpenRequest.setTargetAddress("192.168.0.1:1234!192.168.1.1:1234");
			var iptBuffer = new IptBuffer(new Buffer(msgConnectionOpenRequest.getSize()));		
			var buffer = new Buffer('192.168.0.1:1234!192.168.1.1:1234'+String.fromCharCode(parseInt('7f', 16))+'127.0.0.1:1234!127.0.1.2:1234'+String.fromCharCode(parseInt('00', 16)));
			msgConnectionOpenRequest.write(iptBuffer);
			expect(iptBuffer.buffer.toString('hex', 0, 59)).to.equal(buffer.toString('hex', 0, 59));
		}); 
		
		it("should write just source address to buffer", function(){	    	   
			msgConnectionOpenRequest.setSourceAddress("127.0.0.1");
			var iptBuffer = new IptBuffer(new Buffer(msgConnectionOpenRequest.getSize()));		
			var buffer = new Buffer(String.fromCharCode(parseInt('7f', 16))+'127.0.0.1'+String.fromCharCode(parseInt('00', 16)));
			msgConnectionOpenRequest.write(iptBuffer);
			expect(iptBuffer.buffer.toString('hex', 0, 11)).to.equal(buffer.toString('hex', 0, 11));
		}); 
		
		it("should write just target address to buffer", function(){	    	   
			msgConnectionOpenRequest.setTargetAddress("192.168.0.1");
			var iptBuffer = new IptBuffer(new Buffer(msgConnectionOpenRequest.getSize()));		
			var buffer = new Buffer('192.168.0.1'+String.fromCharCode(parseInt('00', 16)));
			msgConnectionOpenRequest.write(iptBuffer);
			expect(iptBuffer.buffer.toString('hex', 0, 10)).to.equal(buffer.toString('hex', 0, 10));
		});
		
		it("should raise combined address too long exception for > 62 byte strings", function(){	    	   
			msgConnectionOpenRequest.setTargetAddress("255.255.255.255:12345!255.255.22.1");
			msgConnectionOpenRequest.setSourceAddress("255.255.255.255!255.255.22.12");
			
			var iptBuffer = new IptBuffer(new Buffer(msgConnectionOpenRequest.getSize()));		
				
			expect(function(){msgConnectionOpenRequest.write(iptBuffer);}).to.throw(Error, "Combined Address too long!");
		});
		
	});
	  
	describe("parse()", function() {

		var IptBuffer = require('../../lib/IptBuffer');
		  
		it("should return a MsgConnectionOpenRequest for Target-IP and Source-IP", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer('192.168.0.1'+String.fromCharCode(parseInt('7f', 16))+'127.0.0.1'+String.fromCharCode(parseInt('00', 16))));
			iptBuffer.offset=0;
			var msgConnectionOpenRequest = MsgConnectionOpenRequest.parse(iptBuffer);
			expect(msgConnectionOpenRequest).to.be.an.instanceof(MsgConnectionOpenRequest);
			expect(msgConnectionOpenRequest.getSourceAddress()).to.equal("127.0.0.1");
			expect(msgConnectionOpenRequest.getTargetAddress()).to.equal("192.168.0.1");
		});  
		
		it("should return a MsgConnectionOpenRequest for Target-IP:PORT and Source-IP:PORT", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer('192.168.0.1:12345'+String.fromCharCode(parseInt('7f', 16))+'127.0.0.1:12345'+String.fromCharCode(parseInt('00', 16))));
			iptBuffer.offset=0;
			var msgConnectionOpenRequest = MsgConnectionOpenRequest.parse(iptBuffer);
			expect(msgConnectionOpenRequest).to.be.an.instanceof(MsgConnectionOpenRequest);
			expect(msgConnectionOpenRequest.getSourceAddress()).to.equal("127.0.0.1:12345");
			expect(msgConnectionOpenRequest.getTargetAddress()).to.equal("192.168.0.1:12345");
		});  
		
		it("should return a MsgConnectionOpenRequest just for Target-IP:PORT", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer('192.168.0.1:12345'+String.fromCharCode(parseInt('00', 16))));
			iptBuffer.offset=0;
			var msgConnectionOpenRequest = MsgConnectionOpenRequest.parse(iptBuffer);
			expect(msgConnectionOpenRequest).to.be.an.instanceof(MsgConnectionOpenRequest);
			expect(msgConnectionOpenRequest.getTargetAddress()).to.equal("192.168.0.1:12345");
		});  
		
		it("should return a MsgConnectionOpenRequest just for Source-IP:PORT", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer(String.fromCharCode(parseInt('7f', 16))+'127.0.0.1:12345'+String.fromCharCode(parseInt('00', 16))));
			iptBuffer.offset=0;
			var msgConnectionOpenRequest = MsgConnectionOpenRequest.parse(iptBuffer);
			expect(msgConnectionOpenRequest).to.be.an.instanceof(MsgConnectionOpenRequest);
			expect(msgConnectionOpenRequest.getSourceAddress()).to.equal("127.0.0.1:12345");
		}); 
	});  
});