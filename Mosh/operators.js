//console.log("hey there!");


//ternary operator
//e.g. if a customer has more than 100 points, they are a 'gold' customer, otherwise they are a 'silver' customer

let points = 110;
let type = points > 100 ?  'gold' : 'silver';
//console.log(type);

//Logical AND (&&) operator
//e.g. see if a customer is elgible for a loan

let income = 50000;
let creditScore = 750;
let highIncome = income > 60000 ? true : false;
let goodCreditScore = creditScore > 700 ? true : false;
let eligibleForLoan = highIncome && goodCreditScore;

//Logical OR (||) operator
//let eligibleForLoan = highIncome || goodCreditScore;

//Logical NOT (!) operator
//applicationRefused will always be the opposite of eligible for loan
//console.log('Eligible' , eligibleForLoan)
let applicationRefused = !eligibleForLoan;
//console.log('Applicaton Refused', applicationRefused);

//Logical Operators with Non-booleans
//falsy and truthy
//using the following technique to define default values

//let userColor = "red";
let userColor = undefined;
let defaultColor = "blue";
//if user defined a color, will use the userColor, otherwise use the default color
let currentColor = userColor || defaultColor;
//console.log(currentColor);

//Bitwise Operators (binary)
//not really used in the real world
//1 = 00000001  (8 bits which represents 1 byte of information in a computer)
// 2 = 00000010


//exercise: swap the values of two variables

let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;


//console.log(a);
//console.log(b);