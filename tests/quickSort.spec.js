/*jshint esversion: 6*/


const chai = require('chai');
const expect = chai.expect;
const quickSort = require('../quickSort.js');

var smallArr = [3,4,7,1];
var largeArr = [42,69,7,13,255, 2, 9000];
var fakeArr = 42;

describe('quickSort', ()=> {
	it('should be a function', function(){
		expect(quickSort).to.be.a('function');
	});
	it('should sort a small array with 1 digit numbers', function(){
		expect(quickSort(smallArr)).to.be.deep.equal([1,3,4,7]);
	});
	it('should sort a larger array with double/tripple digits', function(){
		expect(quickSort(largeArr)).to.be.deep.equal([2,7,13,42,69,255,9000]);
	});
	it('should return false if arr is not an array', function(){
		expect(quickSort(fakeArr)).to.be.equal(false);
	});


});