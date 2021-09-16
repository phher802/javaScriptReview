//value vs reference types
//value/primitives types are: number, string, boolean, symbol, underfined, null
//reference types: object, function, array

let x = 10;  //the value 10 is stored inside variable x and when you copy the variable, it is copied into the new variable
let y = x;  //y returns 10

let x = 20;  //x returns 20

//x and y are two independent variables

//if you use a reference type
let i = {value: 10};  //returns {value: 20}
let j = i;  //j returns {value: 20}

i.value = 20;

//the object is not stored in the variable i, it is store somewhere else in the memory and the address of that 
//memory location is stored inside the variable, so when it is copied, its address or reference is copied
//in other words, both variables are pointing to the same object in memory, when you modify the objects, 
//the changes are immediately visible to the other variables
//in conclusion:
//primitives are copie by their value
//reference/objects are copied by their reference

