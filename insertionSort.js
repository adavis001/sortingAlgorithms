/* jshint esversion: 6 */
var insertionSort = (arr) => {
//edge case: Make sure arr is an array!
	if(Array.isArray(arr) === false){
		return false;
	}

  //traversing in the array
for (var i = 1; i <= arr.length-1; i++){
	//edge case: make sire every index is a number!
	if(typeof arr[i] !== "number"){
				return false;
		}
  		var chosen = arr[i];
  		var checkArrIndex = i;
  		var shifted = false;
         //when current index value is less than previous, shift to the left by one, keep repeating until it can't
    var j=0;
  while ( arr[checkArrIndex -1] > chosen){

    //write over the current index value with the previous
    arr[checkArrIndex] = arr[checkArrIndex -1];
    //index is now moved to the previous index
    checkArrIndex = checkArrIndex -1;
    shifted =true;
     j++;
  }
  if(shifted === true){
            //return the smaller value to the shifted index
  arr[checkArrIndex] = chosen;
  }
}
  return arr;
};
module.exports = insertionSort;