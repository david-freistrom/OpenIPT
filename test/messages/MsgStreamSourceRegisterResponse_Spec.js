var chai = require('chai');
chai.use(require('chai-change'));

var expect = require("chai").expect;
var should = require('chai').should;

// Specs for MsgStreamSourceRegisterResponse
describe("MsgStreamSourceRegisterResponse", function() {

	var MsgStreamSourceRegisterResponse = require("../../lib/messages/MsgStreamSourceRegisterResponse");
	var msgStreamSourceRegisterResponse;	
		
	before(function() {
		    // runs before all tests in this block
	})
		  
	after(function(){
		    // runs after all tests in this block
	})
		  
	beforeEach(function(){
		msgStreamSourceRegisterResponse = new MsgStreamSourceRegisterResponse();
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