var chai = require('chai');
chai.use(require('chai-change'));

var expect = require("chai").expect;
var should = require('chai').should;

// Specs for MsgDeviceSoftwareResponse
describe("MsgDeviceSoftwareResponse", function() {

	var MsgDeviceSoftwareResponse = require("../../lib/messages/MsgDeviceSoftwareResponse");
	var msgDeviceSoftwareResponse;	
		
	before(function() {
		    // runs before all tests in this block
	})
		  
	after(function(){
		    // runs after all tests in this block
	})
		  
	beforeEach(function(){
		msgDeviceSoftwareResponse = new MsgDeviceSoftwareResponse();
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