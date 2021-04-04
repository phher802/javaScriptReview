//write a function called maxSubArraySum which accepts an array of 
//integers and a number called n. The function should calculate the 
//maximum sum of n consecutive elements in the array

//declare 2 variables called maxSum and tempSum at 0;
// set edgecase to return null if array is less than num
// for loop to create the first sum by adding to maxsum
// set maxSum to tempSum to hold sum
// start another loop at num index
//take tempSum and add the next index and subtract the first index of tempsum
//then compare tempsum and maxsum and return the max number

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;

    if(arr.length < num) return null;  //egdecase

    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum) 
    }

    return maxSum;
}

//--------------------
//challenge problem 2: maxSubarraySum
//given an array of integers and a number, write a function called maxSubarraySum
//which finds the max sum of a subarray with the length of the number passed to the function
//subarrays must consist of consecutive elements from the original array

maxSubarraySum2([100, 200, 300, 400], 2) //700
maxSubarraySum2([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)  //39
maxSubarraySum2([-3, 4, 0, -2, 6, -1], 2 ) //5
maxSubarraySum2([2, 3], 3) //null

//break it down:
//write edge case length is less than num, return false
//set a var called total to zero
// loop thru array and add to total
// set a new var called currentTotal equal to total 
// new loop thru array.length and add to current total

function maxSubarraySum2(arr, num){
    if(arr.length < num){
        return false;
    }

    let total = 0;

    for (let i = 0; i < num; i++){
        total += arr[i];
    }

    let currentTotal = total;

    for (let i = num; i < arr.length; i++){
        currentTotal += arr[i] - arr[i - num];
        total = Math.max(total, currentTotal);
    }

    return total;
}