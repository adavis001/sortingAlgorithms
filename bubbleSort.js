/*jshint esversion: 6*/

var bubbleSort = function(array){
	var temp;
	var swapped = true;
//function will continue to run until it runs through the entire array without having to swap positions of any indices
	while(swapped === true){
		swapped = false;
		for(var i=0; i<array.length; i++) {
			//if the current array is smaller than the one before it, swap the positions of the two indices.
			if(array[i-1] > array[i]) {
				temp = array[i];
				array[i] = array[i-1];
				array[i-1] = temp;
				swapped = true;
			}
		}
	}
	return array;
};

module.exports = bubbleSort;

