//functions are objects

//this circle funciton is an object
function Circle(radius){
    this.radius = radius;
    this.draw = function (){
        console.logl("draw");
    }
}

//it's can object because you can use dot notation to grab its properties
//the purple icons are the methods, such as apply, call, bind
Circle.call({}, 1);  //can call a function, pass an empty object where "this" will reference the empty object, if you have one argument, pass 1, 
//can pass more arguments if you have more than 1 eg. 1, 2, 3...
//this expression is exactly like the this expression:
const another = new Circle(1);

//the blue icons are properties
Circle.name  //returns the name of the function

Circle.apply({},[1, 2, 3] );  //can call a function, but instead of passing all the args explicitly, you pass them as an array


const Circle1 = new Function("radius", `   
this.radius = radius;
this.draw = function (){
    console.logl("draw");
}
`);

//now you can call Circle1 like just calling the Circle function
const circle =  new Circle1(1);

