/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;
const bubbleSort = require('../bubbleSort.js');

var numerals = [0,11,5];
var manyNumerals = [1,7,3,19,22,4,5];


describe('bubbleSort', ()=> {
	it('should be a function', function(){
		expect(bubbleSort).to.be.a('function');
	});
	it('should sort a small array', function(){
		expect(bubbleSort(numerals)).to.be.deep.equal([0,5,11]);
	});
	it('should sort a large array', function(){
		expect(bubbleSort(manyNumerals)).to.be.deep.equal([1,3,4,5,7,19,22]);
	});
});