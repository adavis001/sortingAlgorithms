/*jshint esversion: 6*/
const chai = require('chai');
const expect = chai.expect;
const selectionSort = require('../selectionSort.js');

var select = [5,7,12,1,4];
var fakeArr = 42;
var mixedArr = [17,"18",19];

describe('selectionSort', ()=> {
	it('should be a function', function(){
		expect(selectionSort).to.be.a('function');
	});
	it('should sort an array', function(){
		expect(selectionSort(select)).to.be.deep.equal([1,4,5,7,12]);
	});
	it('should return false if arr is not an array', function(){
		expect(selectionSort(fakeArr)).to.be.equal(false);
	});
	it('should return false if an index is not a number', function(){
		expect(selectionSort(mixedArr)).to.be.equal(false);
	});
});
