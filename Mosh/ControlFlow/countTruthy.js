//create a function called countTruthy which takes an array and 
//returns a number of truthy elements in this array

function countTruthy(array){
    let count = 0;
    
    for(let value of array){
        if(value) //this value may be a boolean or non-boolean; if it is a non-boolean, 
        //the js engine will try to interpret as truthy or falsy; if it's a truthy then count will be incremented
            count++;
        return count;
    }
}