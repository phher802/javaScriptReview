//write a function called power which accepts a base and an exponent
//the function should return the power of the base to the exponent
//this funciton should mimic the functionality of Math.pow() - do not worry abut negative bases and exponents

//understand the problem:
        //pass in a base and an exponent as arguments
        //return: the power of the base to the exponent 


function power(base, exponent){
    if(exponent === 0){
        return 1;
    }
    return base * power(base, exponent -1);
}