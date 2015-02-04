var chai = require('chai');
chai.use(require('chai-change'));

var expect = require("chai").expect;
var should = require('chai').should;

// Specs for MsgDeviceTimeResponse
describe("MsgDeviceTimeResponse", function() {

	var MsgDeviceTimeResponse = require("../../lib/messages/MsgDeviceTimeResponse");
	var msgDeviceTimeResponse = new MsgDeviceTimeResponse();	
		
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
	  
	describe("getTime() / setTime()", function(){
		it("should set and get instance variable time for a valid time value", function(){	    	   
			msgDeviceTimeResponse.setTime(1);
		    expect(msgDeviceTimeResponse.getTime()).to.equal(1);
		});
		  
		it("should throw out of range error for time > 32 bit integer", function(){	    	   
			expect(function(){msgDeviceTimeResponse.setTime(34647567345436456)}).to.throw(Error, 'Time is out of range!');
		});
		  
		it("should throw not an integer error for time as a string", function(){	    	   
			expect(function(){msgDeviceTimeResponse.setTime("test")}).to.throw(Error, 'Time is not an integer!');
		});
		  
		it("should throw not an positive integer error for time < 0", function(){	    	   
			expect(function(){msgDeviceTimeResponse.setTime(-1)}).to.throw(Error, 'Time must be >= 0 !');
		});
	});

	  
	describe("getSize()", function() {
		it("should return 4", function(){	    	   
			expect(msgDeviceTimeResponse.getSize()).to.equal(4);
		}); 
	});
	  
	describe("write()", function() {
		  
		var IptBuffer = require('../../lib/IptBuffer');

		it("should write UInt32 value 0x00000001 to buffer in Little-Endian", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer(4));
			msgDeviceTimeResponse.setTime(1);
			
			msgDeviceTimeResponse.write(iptBuffer);
			expect(iptBuffer.buffer.toString('hex', 0, 4)).to.equal("01000000");
		  
			// expect(function() {
			// msgDeviceTimeResponse.write(iptBuffer);
			// }).to.change(iptBuffer.buffer.toString('hex', 0, 4),{to:
			// "01000000"});
		}); 
	});
	  
	describe("parse()", function() {

		var IptBuffer = require('../../lib/IptBuffer');
		  
		it("should return a MsgDeviceTimeResponse", function(){	    	   
			var iptBuffer = new IptBuffer(new Buffer(4));
			iptBuffer.writeUInt32(1);
			iptBuffer.offset=0;
			var msgDeviceTimeResponse = MsgDeviceTimeResponse.parse(iptBuffer);
			expect(msgDeviceTimeResponse).to.be.an.instanceof(MsgDeviceTimeResponse);
			expect(msgDeviceTimeResponse.getTime()).to.equal(1);
		});  
	});  
});