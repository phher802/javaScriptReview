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