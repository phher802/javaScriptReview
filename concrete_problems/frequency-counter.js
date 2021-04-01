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