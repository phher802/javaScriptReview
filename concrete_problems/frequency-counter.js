//write a function called same, which accepts two arrays
//the function should return true if every value in the array has it's corresponding values
//squared in the second array.  the frequency of values must be the same

//1. understand the problem:  
        // values in array 1 must be n^2 in array 2; array1[i] = array2[i^2]
        // frequecy must be the same: ([1, 2, 3], [4, 1, 9]) = true
                                    // ([1, 2, 1], [4, 4, 1]) = false

// break it down:
    // write edgecase; because they're arrays and frequencies must be the same, then compare length
    // set 2 counters variable to objects
    // loop thru each array one time and add to the objects
    // compare object 1 to the n^2 in object 2, return false if not a match


function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let freqCounter1 = {}
    let freqCounter2 = {}

    for (let val of arr1){
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }

    for (let val of arr2){
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }

    for (let key in freqCounter1){
        if(!(key ** 2 in freqCounter2)){
            return false;
        }
        //is the key in freqCount1 a squared key in freqCounter2?

        if(freqCounter2[key ** 2] !== freqCounter1[key]){
            return false;
        }
        //if keys match, check the values of each keys to see if they match
    }
    return true;
}

//this is O(N) linear time complexity
// the idea behind freqCounter is to use object to construct a profile, a way of breaking down the content
// of an arrary or string, and you can compare the breakdown to how another object looks
//baseline: two arrays are broken down into objects, classified what are in the arrays/strings and compare the objects.
//----------------------------------

//challenge problem 2
//write a function called sameFrequency
//given two positive integers, find out if the two numbers have the same frequency of digits
// solution MUST have the following complexities: time O(N)
 sameFreq(182, 281)  //true
 sameFreq(34,14)  // false
 sameFreq(3589578, 5879385)  //true
 sameFreq(22, 222)  //false

//understand the problem:  the two numbers have to be the same length, num1 has to have the same numbers in num2
// if they have the same freq, return true, or else false
// write an edge case to determine if length are the same
// create empty objects for num1 and num2
// loop through the num1 and add to num1 obj
// loop through the num2 and add to num 2 obj
// loop through num 1 obj and compare to key objs in num2 
    
        

function sameFreq(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    if(strNum1.length !== strNum2.length){
        return false;
    }

    let countNum1 = {};
    let countNum2 = {};

    for(let i = 0; i < strNum1.length; i++){
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }

    for(let j = 0; j < strNum2.length; j++){
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }

    for(let key in countNum1){
        if(countNum1[key] !== countNum2[key]){
            return false;
        }
    }
    return true;

}

//------------------------

//challenge problem 3:  frequency counter / multiple pointers
//implement a function called areThereDuplicates which accepts a variable number of arguments
// and checks whether there are any duplicates among the arguments passed in
// this can be solved this using the frequency counter pattern or the multiple pointers pattern

areThereDuplicates(1, 2, 3 ) //false
areThereDuplicates(1, 2, 2)  //true
areThereDuplicates('a', 'b', 'c', 'a')  //true

//break it down:
    //set a variable as an empty obj
    // add the args passed in, to the empty obj
    // check to see if a key is greater than 1


function areThereDuplicates(){
    let collection = {};

    for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]])
    }

    for(let key in collection){
        if(collection[key] > 1){
            return true;
        }
    }

    return false;
}

