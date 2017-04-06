/*jshint esversion: 6*/

function selectionSort(arr){

	var newArr = [];
	var smallest = arr[0];
	var index = 0;

	if(Array.isArray(arr) === false){
		return false;
	}

	while(arr.length !== 0){
		for(var i = 1; i<arr.length; i++){
			if(typeof arr[i] !== "number"){
				return false;
		}
			if(arr[i] < smallest){
				smallest = arr[i];
				index = i;
			}
		}
		arr.splice(index,1);
		newArr.push(smallest);
		smallest = arr[0];
		index = null;
		console.log(arr);
	}
	return newArr;
}


module.exports = selectionSort; 