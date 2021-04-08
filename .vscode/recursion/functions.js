//testing the base case and different input of a recursion function


function countDown(num){

    if(num <= 0){
        console.log("All done!");
        return;
    }

    console.log(num);
    num--;
    countDown(num);
}
 

//------------

function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}


//identify the base case  
    //if(num === 1) return 1;
//what is the different input 
    //sumRange(num - 1)
//what is returned from the base case matters because it's added on to what the previous function call was wating for

//----------
//challenge 2:
//write a function called power which accepts a base and an exponent; the function should return the power
//of the base to the exponent; the function should mimic the functionality of Math.pow()

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

//---------
//Challenge 3:
//write a function called productOfArray which takes in an array of numbers and returns the product of them all

function productOfArray(arr){
    if(arr.length === 0){
        return 1;
    }
     return arr[0] * productOfArray(arr.slice(1));

}

//------
//challenge 4: Range
//write a function called rescursiveRange which accepts a number and adds up all the numbers from 0 to the 
//number passed to the function

function recursiveRange(num){
    if(num === 0){
        return 0;
    }

    return num + recursiveRange(num - 1);
}

//------------
//challenge 5: Fibonnaci sequence
//write a recrusive function called fib which accepts a number and returns then nth number in the fibonnaci
//sequence.  Fibonnaci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8 which starts with 1 and 1, 
//and where every number thereafter is equal to the sum of the previous two numbers

function fib(n){
    if(n <= 2){
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}