var chai = require('chai');
chai.use(require('chai-change'));

var expect = require("chai").expect;
var should = require('chai').should;

// Specs for MsgDeviceTimeResponse
describe("MsgConnectionOpenRequest", function() {

	var MsgConnectionOpenRequest = require("../../lib/messages/MsgConnectionOpenRequest");
	var msgConnectionOpenRequest = new MsgConnectionOpenRequest();	
		
	before(function() {
		    // runs before all tests in this block
	})
		  
	after(function(){
		    // runs after all tests in this block
	})
		  
	beforeEach(function(){
		    // runs before each test in this block
	})
		  
	afterEach(function(){
		    // runs after each test in this block
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
	});

	  
	describe("getSize()", function() {
		xit("should return 1", function(){	    	   
			expect(msgConnectionOpenRequest.getSize()).to.equal(1);
		}); 
	});
	  
	describe("write()", function() {
		  
		var IptBuffer = require('../../lib/IptBuffer');

		xit("should write UInt8 value 0x01 to buffer", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer(1));
			msgConnectionOpenRequest.setResponse(1);
			
			msgConnectionOpenRequest.write(iptBuffer);
			expect(iptBuffer.buffer.toString('hex', 0, 1)).to.equal("01");
		  
			// expect(function() {
			// msgDeviceTimeResponse.write(iptBuffer);
			// }).to.change(iptBuffer.buffer.toString('hex', 0, 4),{to:
			// "01000000"});
		}); 
	});
	  
	describe("parse()", function() {

		var IptBuffer = require('../../lib/IptBuffer');
		  
		xit("should return a MsgConnectionOpenRequest", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer(1));
			iptBuffer.writeUInt8(1);
			iptBuffer.offset=0;
			var msgConnectionOpenRequest = MsgConnectionOpenRequest.parse(iptBuffer);
			expect(msgConnectionOpenRequest).to.be.an.instanceof(MsgConnectionOpenRequest);
			expect(msgConnectionOpenRequest.getResponse()).to.equal(1);
		});  
	});  
});