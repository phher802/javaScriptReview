//creating multiple pointers or values that correspond to an index 
//or position and move towards the beginning, end,or middle based 
//on a certain condition

//problem: write a function called sumZero which accepts a sorted arrayof integers.  
//the function should find the first pair where the sum is zero
//Return an array that includes both values that sum to zero or undefined if a pair does not exist

//start the left index at 0
//start the right index at -1
//while left is less than the right, add the left and right index
//if the sum is 0, then add the left and the right indexes as a new array
//else if sum is greater than 0, move the pointer one to the left
//loop again, if sum is less than 0 then move the left pointer one to the right

function sumZero(arr){
    let left = 0;
    let right = arr.lenghth -1;

    while(left < right){
        let sum = arr[left] + arr[right];

        if (sum === 0){
            return [arr[left], arr[right]];
        }else if(sum > 0){
            return right--;
        }else{
            return left++;
        }
    }

}

arr = [-3,-2,0, 5, 6];
console.log(sumZero(arr));


//another problem
//implement a function called countUniqueValues, which accepts a sorted array
//and counts the unique values in the array; there can be negative numbers
//in the array, but it will always be sorted

//use two pointers, i and j
//i starts at index 0  and j starts at index 1
//j will loop through the array while i keeps track of the unique values

function countUniqueValues(arr){
    if(arr.lenghth === 0) return 0;

    var i = 0;

    for(var j = 1; j < arr.lenghth; j++){
        if (arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];   //sets i equal to j if i and j are not the same
        }
    }
    return i + 1   //i = 0, and you're counting from 0, the actual count would be plus 1

}

//---------------------
//3rd challenge problem:
//write a function called averagePair.
//given a sorted array of integers and a target average, determine if there is a pair of values in the 
//array where the avg of the pair equals the target average
//there may be more than one pair that matches the average target
averagePair([1, 2, 3], 2.5)  //true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)  //true
averagePair([-1, 0, 3, 4, 5, 6], 4.1)  //false
averagePair([], 4)  //false

//understand the problem: the sum/2 of two int in array must equal the target average
//break it down:
    //set two pointers, one at the beginnig of array and one at the end
    //since array is sorted, assume start will be less than end
    //use while loop to check that as an edge case
    //set avg to start + end / 2
    //use conditionals to check if the avg equals the target num
    //if yes, return true
    //if avg is less than num, then move start to next index by incrementing start
    //if avg > num, then decrement the end index instead

function averagePair(arr, num){
    let start = 0;
    let end = arr.length - 1;

    while( start < end){
        let avg = (arr[start] + arr[end]) / 2

        if(avg === num){
            return true;
        }else if(avg < num){
            start++
        }else{
            end--;
        }
    }
    return false;
}