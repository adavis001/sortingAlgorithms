# Sorting Algorithms:

### Bubble Sort

Bubble sorting is a sorting methods that looks at the first and second enteries of an array and puts those two in numerical order.  Then the algorithm looks at the first and second enteries, then the second and third and the third and fourth and so on until you reach the end of the array.  Then the algorithm repeats itself and compares the entries to each other once again in the same way.  The bubble algorithm will repeat this process until it goes through the entire array without having to reorder any of the entries.  That is when the algorithm knows that the array has been successfully sorted and will return to you the sorted array.

Bubble sort's worst case scenario would when it encounters a reversed array, meaning that the array is arranged from highest value to lowest.  This would mean that first index of the array would have to be swapped over and over again until it reached the end.  Then the new starting index of the array would undertake a similar journey to the second to the last position in the array.  This would be repeated until the array was sorted.  Best case scenario for bubble sort would be if it encounters an array that is already sorted.  The algorithm will pass through the entire array without swapping anything and return back to you the assorted list.

**TLDR:**


Algorithm                     Bubble Sort      
Best Case Scenario            O(N)            
Worst case performance        O(n^2)          
Worst case space complexity   O(n^2           

	Psudocode is as follows (brought to you by Wikipedia)
		procedure bubbleSort( A : list of sortable items )
    	n = length(A)
    	repeat 
       	 swapped = false
        	for i = 1 to n-1 inclusive do
            	/* if this pair is out of order */
            	if A[i-1] > A[i] then
                	/* swap them and remember something changed */
                	swap( A[i-1], A[i] )
                	swapped = true
            	end if
        	end for
    	until not swapped
	end procedure

### Quick Sort 

Quick sort takes an array and seperates it's values at a certain "pivot" point or partitian point.  From that point, all the indexes are split into two different sections, based on whether their values are greater to or less than the value of the pivot point.  If either of these split sections are more than 1 indices long, then they too are seperated in the same fashion until all sections are only 1 index long.  Once everything is broken down, we join all the values together in order to create a sorted array...quickly.

The best case scenario for the quick sort algorithm is every "split" creates two nearly equally sized arrays.  This means that the algorithm will be able to seperate every array into 1 indices long arrays in the fewest possible steps.  

The worst case scenario for quicksort would be when the splitting of each array creates one empty array on one side and the rest of the numbers on the other.  Meaning if the largest of smallest number in the array happens to be the pivot point, then the array would be split into one blank array, and another full of the remainding values.  This would slow down the splitting process and create more work for the algorithm.

	Psodocode provided by Wikipedia:
	algorithm quicksort(A, lo, hi) is
    if lo < hi then
        p := partition(A, lo, hi)
        quicksort(A, lo, p – 1)
        quicksort(A, p + 1, hi)

	algorithm partition(A, lo, hi) is
    pivot := A[hi]
    i := lo - 1    
    for j := lo to hi - 1 do
        if A[j] ≤ pivot then
            i := i + 1
            swap A[i] with A[j]
    swap A[i+1] with A[hi]
    return i + 1

### Selection Sort  

Selection sort finds the smallest value in a given array and removes it from the given array into a new empty array.  It then repeats this process, finding the new lowest number for the given array and relocating it to the end of the new array.  This process is repeated until the original array is empty and the new array contains the sorted contents of the original array.



	Psudocode (sponsored by Wikipedia):
		/* a[0] to a[n-1] is the array to sort */
	int i,j;
	int n;

	/* advance the position through the entire array */
	/*   (could do j < n-1 because single element is also min element) */
	for (j = 0; j < n-1; j++) 
	  {
	    /* find the min element in the unsorted a[j .. n-1] */
	
	    /* assume the min is the first element */
	    int iMin = j;
	    /* test against elements after j to find the smallest */
	    for (i = j+1; i < n; i++) {
	        /* if this element is less, then it is the new minimum */
	        if (a[i] < a[iMin]) {
	            /* found new minimum; remember its index */
 	           iMin = i;
	        }
	    }
	
	    if(iMin != j) 
	    {
	        swap(a[j], a[iMin]);
	    }
	}