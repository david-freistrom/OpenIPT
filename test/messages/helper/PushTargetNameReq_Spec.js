var chai = require('chai');
chai.use(require('chai-change'));

var expect = require("chai").expect;
var should = require('chai').should;

// Specs for PushTargetNameReq
describe("PushTargetNameReq", function() {

	var PushTargetNameReq = require("../../lib/messages/helper/PushTargetNameReq");
	var pushTargetNameReq;	
		
	before(function() {
		    // runs before all tests in this block
	})
		  
	after(function(){
		    // runs after all tests in this block
	})
		  
	beforeEach(function(){
		pushTargetNameReq = new PushTargetNameReq();
	})
		  
	afterEach(function(){
		    // runs after each test in this block
	})
	  
	describe("getResponse() / setResponse()", function(){
	});

	  
	describe("getSize()", function() { 
	});
	  
	describe("write()", function() {
	});
	  
	describe("parse()", function() {
	});  
});