var chai = require('chai');
chai.use(require('chai-change'));

var expect = require("chai").expect;
var should = require('chai').should;

// Specs for MsgPushTargetNamelistResponse
describe("MsgPushTargetNamelistResponse", function() {

	var MsgPushTargetNamelistResponse = require("../../lib/messages/MsgPushTargetNamelistResponse");
	var msgPushTargetNamelistResponse;	
		
	before(function() {
		    // runs before all tests in this block
	})
		  
	after(function(){
		    // runs after all tests in this block
	})
		  
	beforeEach(function(){
		msgPushTargetNamelistResponse = new MsgPushTargetNamelistResponse();
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