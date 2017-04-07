/*jshint esversion: 6*/
const chai = require('chai');
const expect = chai.expect;
const insertionSort = require('../insertionSort.js');

var insert = [5,7,12,1,4];
var fakeArr = 42;
var mixedArr = [17,"18",19];

describe('insertionSort', ()=> {
	it('should be a function', function(){
		expect(insertionSort).to.be.a('function');
	});
	it('should sort an array', function(){
		expect(insertionSort(insert)).to.be.deep.equal([1,4,5,7,12]);
	});
	it('should return false if arr is not an array', function(){
		expect(insertionSort(fakeArr)).to.be.equal(false);
	});
	it('should return false if an index is not a number', function(){
		expect(insertionSort(mixedArr)).to.be.equal(false);
	});
});
