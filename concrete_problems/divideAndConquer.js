//uses binary search
//Given a sorted array of integers, write a function called search, that accepts a value and 
//returns the index where the value passed to the function is located.
//If the value is not found, return -1

//time complexity - log(N) - binary search

function search(arr, val){
    let min = 0;
    let max = arr.length - 1;

    while (min <= max){
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (arr[middle] < val){
            min = currentElement + 1;
        }
        else if(arr[middle] > val){
            max = currentElement -1;

        }else{
            return middle;
        }

    }
    return -1;
}

arr = []
console.log(search())