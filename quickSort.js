/*jshint esversion: 6*/

function quickSort(arr){
	var pivot = arr[0];
	var leftArr = [];
	var rightArr = [];
//check if arr is an array
	if(Array.isArray(arr) === false){
		return false;
	}
//set base case
	if(arr.length <2){
		return arr;
	}
//seperate left and right arrays
	for(var i = 1; i<arr.length; i++){
		if(typeof arr[i] !== "number"){
			return false;
		}
		if(arr[i] >= pivot){
			rightArr.push(arr[i]);
		}
		else{
			leftArr.push(arr[i]);
		}

	}
//Put a lime in the coconut and drink 'em both togetha! (concat)
	arr = quickSort(leftArr).concat(pivot, quickSort(rightArr));
	return arr;
}



module.exports = quickSort;