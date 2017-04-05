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

	for(var i = 0; i<arr.length; i++){
		if(arr[i] > pivot){
			rightArr.push(arr[i]);
			sorted = true;
		}
		if(arr[i] < pivot){
			leftArr.push(arr[i]);
			sorted = true;
		}

	}
	arr = quickSort(leftArr).concat(pivot, quickSort(rightArr));
	return arr;
}



module.exports = quickSort;