//ex1: write a function that takes two numbers and 
//returns the maximum of the two


function maxNum(num1, num2){
    if(num1 > num2) return num1;      
     else return num2;
}
 
//test function with different possible values
let number = maxNum(1, 2);
let numer1 = maxNum(4, 2);
let number2 = maxNum(3, 3);

console.log(number, numer1, number2);

//cleaner implementation
function maxNum(num1, num2){
    if(num1 > num2) return num1;
    //else keyword is not really needed here since num2 will never execute if num1 is greater
    return num2;
}

//use tenary operator to make it even cleaner
function maxNum(num1, num2){
    return (num1 > num2) ? num1 : num2;
}

maxNum(3, 15);