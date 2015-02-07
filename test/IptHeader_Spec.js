var chai = require('chai');
chai.use(require('chai-change'));

var expect = require("chai").expect;
var should = require('chai').should;

describe("IptHeader", function() {

	var IptHeader = require("../lib/IptHeader");
	var Constants = require('../lib/Constants');
		   
	describe("IptHeader(commandTag)", function(){
				  
		it("should set commandTag to given 2 byte value", function(){	
			iptHeader = new IptHeader(Constants.PUBLIC_LOGIN_REQUEST);
		    expect(iptHeader.getCommandTag()).to.be.equal(Constants.PUBLIC_LOGIN_REQUEST);
		});
		  
		
	});
});