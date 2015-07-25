var chai = require('chai');
chai.use(require('chai-change'));

var expect = require("chai").expect;
var should = require('chai').should;

// Specs for MsgPushChannelOpenRequest
describe("MsgPushChannelOpenRequest", function() {

	var MsgPushChannelOpenRequest = require("../../lib/messages/MsgPushChannelOpenRequest");
	var msgPushChannelOpenRequest;	
		
	before(function() {
		    // runs before all tests in this block
	})
		  
	after(function(){
		    // runs after all tests in this block
	})
		  
	beforeEach(function(){
		msgPushChannelOpenRequest = new MsgPushChannelOpenRequest();
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