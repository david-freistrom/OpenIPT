var chai = require('chai');
chai.use(require('chai-change'));

var expect = require("chai").expect;
var should = require('chai').should;

// Specs for MsgPushTargetRegisterResponse
describe("MsgPushTargetRegisterResponse", function() {

	var MsgPushTargetRegisterResponse = require("../../lib/messages/MsgPushTargetRegisterResponse");
	var msgPushTargetRegisterResponse;	
		
	before(function() {
		    // runs before all tests in this block
	})
		  
	after(function(){
		    // runs after all tests in this block
	})
		  
	beforeEach(function(){
		msgPushTargetRegisterResponse = new MsgPushTargetRegisterResponse();
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