//how a factorial function is written in iteration

function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i --){
        total *= i;
    }
    return total;
}

//how a factorial is written recursively

function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num -1);
}

//---
//challenge 1: write a function factorial which acccepts a number and returns the factorial of that number
//a factorial is the product of an integer and all the intergers below it
//i.e. factorial (4!) is equal to 24, b/c 4*3*2*1 equals 24; factorial zero(0!) is always 1.

function factorial(x){
    if(x < 0) return 0;
    if(x <=1) return 1;
    return x * factorial(x-1);
}