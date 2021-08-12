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
//find odd numbers
for(let i = 0; i < 10; i++){
    //odd numbers
    if(i % 2 !== 0) console.log(i);
    //or
    //if(i % 2 === 1) console.log(i);
    
}

for(let i = 5; i >= 1; i--){
    if(i % 2 === 1) console.log(i);
}

//using while loop
//declare variable externally
//condition is evaluated ahead of time so if i = 9, the while loop won't execute
let i = 0;
while(i <= 5){
    if(i % 2 === 1) console.log(i);
    i++;  //important to increment or else it will run forever creating an infinite loop
}

//using do..while loop
//do while loops are always executed at least once even if condition is false\
//because loop is executed at the end
let j = 9;
do {
    if(j % 2 === 1) console.log(j);
    j++;
}while(j <=5);

//infiite loops
//while(true){}
//for(let i = 0; i > 0) or for(let i = 0; i < 10; )
        //forgetting to increment i or if i is greater than 0


//for-in loop
//when you want to display all the properties of an object
//for-in loop is better for iterating over the properties of an object and not for arrays
const person = {
    name: "Namjoon",
    age: 26
};

for(key in person)
    console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];
for (let index in colors)
    console.log(index, colors[index]);
    
//in ES6 a new way to iterate over arrays
//using for of, you don't have to deal with the index like the for in loop
//for of loop is better to iterate over an array

for(let color of colors)
    console.log(color);