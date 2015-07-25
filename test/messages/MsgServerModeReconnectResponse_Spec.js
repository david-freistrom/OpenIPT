var chai = require('chai');
chai.use(require('chai-change'));

var expect = require("chai").expect;
var should = require('chai').should;

// Specs for MsgServerModeReconnectResponse
describe("MsgServerModeReconnectResponse", function() {

	var MsgServerModeReconnectResponse = require("../../lib/messages/MsgServerModeReconnectResponse");
	var msgServerModeReconnectResponse;	
		
	before(function() {
		    // runs before all tests in this block
	})
		  
	after(function(){
		    // runs after all tests in this block
	})
		  
	beforeEach(function(){
		msgServerModeReconnectResponse = new MsgServerModeReconnectResponse();
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