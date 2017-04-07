/*jshint esversion: 6*/


function mergeSort(arr){
	//base case
	if(arr.length <2){
		return arr;
	}
	//1) pick pivot in the middle of the arr.  Math.floor() would work as well
	const pivot = Math.ceil(arr.length/2);
	//2) split arr in half at pivot
	const pLeft = arr.slice(0, pivot);
	const pRight = arr.slice(pivot, arr.length);
	//3) recursivly call merge sort until we have completely split up the arr
	const left = mergeSort(pLeft);
	const right = mergeSort(pRight);
	//4) once broken, merge together
	return merge(left, right);
}
	const merge = (left,right) => {
		const result = [];

		while(left.length > 0 && right.length > 0){
			if(left[0] < right[0]) {
				result.push(left.shift());
			} else {
				//if the right element is smaller then push that instead
				result.push(right.shift());
			}
		}
		//while left has a lengeth...do this!
		while(left.length > 0) {
			result.push(left.shift());
		}
		//while right has a lengeth...do this!
		while(right.length > 0) {
			result.push(right.shift());
		}

	return result;

};







module.exports = mergeSort;