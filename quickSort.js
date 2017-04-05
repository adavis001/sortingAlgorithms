/*jshint esversion: 6*/

function quickSort(arr){
	var pivot = arr[0];
	var leftArr = [];
	var rightArr = [];

	if(Array.isArray(arr) === false){
		return false;
	}
	if(arr.length <2){
		return arr;
	}

	for(var i = 1; i<arr.length; i++){
		if(typeof arr[i] !== "number"){
			return false;
		}
		if(arr[i] >= pivot){
			rightArr.push(arr[i]);
		}
		if(arr[i] < pivot){
			leftArr.push(arr[i]);
		}

	}
	arr = quickSort(leftArr).concat(pivot, quickSort(rightArr));
	return arr;
}



module.exports = quickSort;