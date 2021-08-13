//create a function that takes a paramenter called limit, so we pass a number and 
//when funciton is called, all the numbers should show as the limit, and next to the number
//should show whether it's odd or even.

showNumbers(10);

function showNumbers(limit){
    for(let i = 0; i <= limit; i++){
        // if(i % 2 === 0)
        //     console.log(i, 'EVEN');
        // else
        //     console.log(i, 'ODD');

        //a cleaner way to write the if statement and just one console.log
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}

