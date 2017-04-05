/*jshint esversion: 6*/

var bubbleSort = function(array){
	var temp;
	var swapped = true;

	while(swapped === true){
		swapped = false;
		for(var i=0; i<array.length; i++) {
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

