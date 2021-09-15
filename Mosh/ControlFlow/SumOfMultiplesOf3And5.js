//this funciton, passing in a limit, which will return the sum of all the multiples 
//of 3 and 5 up to the limit from zero


function sum(limit){
    var results = 0;
    
    for(let i = 0; i <= limit; i++){
      if(i % 3 === 0 || i % 5 === 0){
          console.log(i);
          results += i     
        }
    }

  return results;
}

console.log(sum(10));