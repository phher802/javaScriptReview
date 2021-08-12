//if.. else
//hour  -- if hour is between 6am and 12pm : Good Morning
//-- if hour is between 12pm and 6pm : Good Afternoon
//otherwise: Good Evening

let hour = 7;

if(hour >=6 && hour < 12)
    console.log("Good Morning")
else if(hour >= 12 && hour <= 18)
    console.log("Good Afternoon")
else
    console.log("Good Evening");


//switch.. case 
//compare the value of the variable to a bunch of other values
//booleans are less common; they are more used with if statements
//switch.. case can be used if you have a lot of values to compare with
let role = 'guest';

switch(role){
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    case 'administrator':
        console.log('Administrator User');
        break;
    default:
        console.log('Unknown Role');
}


//loops - repeat an action a number of times
//for loop
for(let i = 0; i < 10; i++){
    //odd numbers
    if(i % 2 !== 0) console.log(i);
    //or
    //if(i % 2 === 1) console.log(i);
    
}

for(let i = 5; i >= 1; i--){
    if(i % 2 === 1) console.log(i);
}