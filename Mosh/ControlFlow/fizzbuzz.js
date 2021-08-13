//divisible by 3 == Fizz
//divisible by 5 == Buzz
//divisible by both 3 & 5 == FizzBuzz
//not divisible by 3 or 5 == input
//not a number == "not a number";

function fizzBuzz(input){
    if(typeof input !== 'number') return NaN;
  
    if((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
    
    if(input % 3 === 0) return 'Fizz';
    if(input % 5 === 0) return 'Buzz';
  
    return input;
}

let findFizzBuzz = fizzBuzz(false);
console.log(findFizzBuzz);