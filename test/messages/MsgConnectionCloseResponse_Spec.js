var chai = require('chai');
chai.use(require('chai-change'));

var expect = require("chai").expect;
var should = require('chai').should;

// Specs for MsgDeviceTimeResponse
describe("MsgConnectionCloseResponse", function() {

	var MsgConnectionCloseResponse = require("../../lib/messages/MsgConnectionCloseResponse");
	var msgConnectionCloseResponse;	
		
	before(function() {
		    // runs before all tests in this block
	})
		  
	after(function(){
		    // runs after all tests in this block
	})
		  
	beforeEach(function(){
		msgConnectionCloseResponse = new MsgConnectionCloseResponse();
	})
		  
	afterEach(function(){
		    // runs after each test in this block
	})
	  
	describe("getResponse() / setResponse()", function(){
		it("should set and get instance variable response for a valid response value", function(){	    	   
			msgConnectionCloseResponse.setResponse(1);
		    expect(msgConnectionCloseResponse.getResponse()).to.equal(1);
		});
		  
		it("should throw out of range error for response > 8 bit integer", function(){	    	   
			expect(function(){msgConnectionCloseResponse.setResponse(45454354)}).to.throw(Error, 'Unknown Response value!');
		});
		  
		it("should throw not an integer error for response as a string", function(){	    	   
			expect(function(){msgConnectionCloseResponse.setResponse("test")}).to.throw(Error, "Response value not an integer!");
		});
		  
		it("should throw not an positive integer error for response < 0", function(){	    	   
			expect(function(){msgConnectionCloseResponse.setResponse(-1)}).to.throw(Error, 'Unknown Response value!');
		});
		
		it("should throw value not defined error for 0x01 > response > 0x03", function(){	    	   
			expect(function(){msgConnectionCloseResponse.setResponse(0)}).to.throw(Error, 'Unknown Response value!');
		});
	});

	  
	describe("getSize()", function() {
		it("should return 1", function(){	    	   
			expect(msgConnectionCloseResponse.getSize()).to.equal(1);
		}); 
	});
	  
	describe("write()", function() {
		  
		var IptBuffer = require('../../lib/IptBuffer');

		it("should write UInt8 value 0x01 to buffer", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer(1));
			msgConnectionCloseResponse.setResponse(1);
			
			msgConnectionCloseResponse.write(iptBuffer);
			expect(iptBuffer.buffer.toString('hex', 0, 1)).to.equal("01");
		  
			// expect(function() {
			// msgDeviceTimeResponse.write(iptBuffer);
			// }).to.change(iptBuffer.buffer.toString('hex', 0, 4),{to:
			// "01000000"});
		}); 
	});
	  
	describe("parse()", function() {

		var IptBuffer = require('../../lib/IptBuffer');
		  
		it("should return a MsgConnectionCloseResponse", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer(1));
			iptBuffer.writeUInt8(1);
			iptBuffer.offset=0;
			var msgConnectionCloseResponse = MsgConnectionCloseResponse.parse(iptBuffer);
			expect(msgConnectionCloseResponse).to.be.an.instanceof(MsgConnectionCloseResponse);
			expect(msgConnectionCloseResponse.getResponse()).to.equal(1);
		});  
	});  
});