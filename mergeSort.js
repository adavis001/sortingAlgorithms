/*jshint esversion: 6*/


function mergeSort(arr){
	var leftArr = [];
	var rightArr = [];
	var half_array = Math.ceil(arr.length / 2);
  	var newArr = arr.splice(0, half_array);
  	if(arr.length === 1){
  		return arr;
  	} else {
  		
  	}

	console.log(arr);
	console.log(newArr);
	//console.log(half_array);
	return mergeSort(newArr).concat(mergeSort(arr));

}







module.exports = mergeSort;