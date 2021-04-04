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

//----------------
//challenge 3: inSubarrayLen
//whrite a function called minSubarray which accepts two parameters - an array of postive integers and a positive integer
//this function should return the minimal length of a contiguous subarray of which the sum is greater than
// or equal to the integer passed to the function; if there isn't one, return 0 instead

minSubarrayLen([2, 3, 1, 2, 4, 3], 7) // 2 b/c [4, 3] is the smallest subarray
minSubarrayLen([2, 1, 6, 5, 4], 9)  // 2 b/c [5, 4] is the smallest subarray
minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 99, 19], 52)  //1 b/c [62]  is greater than 52
minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)  // 3
minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)  // 5
minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11)  // 2
minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)  //0

//break it down:
// looking for sum so set a var called total to zero
// set two more vars at zero called start and end
// set minLen to infinity
// use while loop to find conditionals
    //if total is less than sum 
    //if total is greatr than sum

function minSubarrayLen(arr, sum){
    let total = 0;
    let start = 0; 
    let end = 0;
    
    let minLen = Infinity;

    while(start < arr.length){
        if(total < sum && end < arr.length){
            total += arr[end];
            end++;
        }else if(total >= sum){
            minLen = Math.min(minLen, end-start);
            total -= arr[start];
            start++;
        }else{
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}

//-------------------------
//challenge 4: find longest substring
//write a function called findLongestSubstring which accepts a string and returns the length of the longest substring
//with all distint characters

findLongestSubstring('') //0
findLongestSubstring('rithmschool')  //7
findLongestSubstring('thisisawesome')  //6
findLongestSubstring('thecatinthehat')  //7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') //8
findLongestSubstring('thisishowweedoit') //6

function findLongestSubstring(str){
    let longest = 0;
    let seen = {};
    let start = 0;

    for( let i = 0; i < str.length; i++){
        let char = str[i];
        if(seen[char]) {
            start = Math.max(start, seen[char]);
        }

        longest = Math.max(longest, i - start + 1);
        
        seen[char] = i + 1;       
    }

    return longest;
}
