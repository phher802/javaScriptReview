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