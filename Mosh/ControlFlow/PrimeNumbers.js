//create function that takes a limit and shows all the Prime numbers up to the limit
//Prime numbers are whose factors are only 1 and itself; it can't be divided evenly into another number
//example:  the factors of "12" is 1, 2, 3, 4, 6, 12
//when you divide 12 by these factors/numbers, you won't get any remainder and it will be zero
//12 can be divided evenly by its factors
//12 is a composite number because it has many factors

//prime numbers only has 2 factors: 1 and itself
//e.g. 11 can only be divided by 1 and 11
//same as 13, it can only be divided by 1, 13



//set i = 2 because 2 is the first prime number
function showPrimes(limit){
    //this loop will iterate from 2 to limit
    for(let num = 2; num <= limit; num++){
        // next loop checks to see if each number is prime or not
        //find factors other than 1 and the number it self
        let isPrime = true;
        for(let factor = 2; factor < num; factor++){
            if(num % factor === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime) console.log(num);
    }
}

showPrimes(20);