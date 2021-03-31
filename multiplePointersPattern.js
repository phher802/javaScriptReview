//creating multiple pointers or values that correspond to an index 
//or position and move towards the beginning, end,or middle based 
//on a certain condition

//problem: write a function called sumZero which accepts a sorted array
//of integers.  the function should find the first pair where the sum is zero
//Return an array that includes both values that sum to zero or undefined 
//if a pair does not exist

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
sumZero(-3,-2,0, 5, 6)


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
            arr[i] = arr[j]   //sets i equal to j if i and j are not the same
        }
    }
    return i + 1   //i = 0, and you're counting from 0, the actual count would be plus 1

}