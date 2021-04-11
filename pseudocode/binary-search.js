//this function accepts a sorted array and a value
//create a left pointer at the start of the array, and a right pointer at the end of the array
//while the left pointer comes before the right pointer:
//create a pointer in the middle
//if you find the value you want, return the index
//if the value is too small, move the left pointer up
//if the value is too large, move the right pointer down
//if you never find the value, return -1

//understand the problem: use binary search to search a sorted array for the value and return the index


function binarySearch(arr, val){
    //create left and right pointers at beginning and end of array, also find the middle
    var start = 0;
    var end = arr.length - 1;
    var mid = Math.floor((start + end) / 2);   //Math.floor rounds the result down nearest whole number
    console.log(start, mid, end);
 
    //while the middle is not what we're looking for
     //use while loop
     //set conditions to see if mid = val and to prevent infinity looping, also set to start is less than end
  
    while(arr[mid] !== val && start <= end){
        //if val is less than mid, move end down by one
        if(val < arr[mid]){
            end = mid - 1; 
        //if val is greater than mid, move start up by one
        }else{
            start = mid + 1;
        }
        mid = Math.floor((start + end) / 2);
    }
     //if you find the value you want, return the index
    //if you never find the value, return -1
    if(arr[mid] === val){
        return mid;
    }
    return -1;
}

//can use ternary operator for last if statement
//return arr[mid] === val ? middle : -1;