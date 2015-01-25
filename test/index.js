var expect = require("chai").expect;
var ipt = require("../index");
var a = require("../lib/MsgDeviceTimeResponse")

describe("MsgDeviceTimeResponse.parse()", function() {
  it("should return 1", function(){	    	   
    var results = a.parse(""); 
	expect(results).to.be(1);
  });
});
