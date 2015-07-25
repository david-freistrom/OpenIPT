var chai = require('chai');
chai.use(require('chai-change'));

var expect = require("chai").expect;
var should = require('chai').should;

// Specs for MsgStreamChannelCloseRequest
describe("MsgStreamChannelCloseRequest", function() {

	var MsgStreamChannelCloseRequest = require("../../lib/messages/MsgStreamChannelCloseRequest");
	var msgStreamChannelCloseRequest;	
		
	before(function() {
		    // runs before all tests in this block
	})
		  
	after(function(){
		    // runs after all tests in this block
	})
		  
	beforeEach(function(){
		msgStreamChannelCloseRequest = new MsgStreamChannelCloseRequest();
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