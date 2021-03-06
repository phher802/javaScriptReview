//Object-oriented programming (OOP)
//functions inside or part of an object is called methods


const circle = {
    radius: 1,
    location: {
        x: 1, 
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log("draw");
    }
};

circle.draw();  //calling the circle draw method


//***************** */
//Factory Functions -- a way to produce objects
//this example also simplifies the circle object above
//uses camel case notation
function createCircle(radius){
    return {
        radius,
        draw() {
            console.log("draw");
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2);

//************ */
//Constructor Functions -- another way to create objects
//use Pascal notation by convention -- first letter is capitalized
//used more by developers who are familiar with other languages like C#
function Circle(radius){
    this.radius = radius;  //this. refereces an empty object, radius is a property so we are adding a new property called radius with an empty object
    this.draw = function (){   
        console.log("draw");
    }
}

const myCircle = new Circle(1);  
console.log(myCircle);
//when "new" operator is used, 3 things happen:
//1. it creates a new empty object e.g. const x = {}
//2. set "this" to point to new empty object 
//3. it will return object from the function Circle
//set the new object by pointing const circle to that object


//every object in javascript has a property called "constructor" and that references the function that 
//was used to construct or create that object
//type "myCircle.constructor" into the dev tool console and it will show you the function 

let x = {}  //let x = new Object;   this is a built-in constructor literal

//other built-in constructors
new String();  //but we often use string literals like '', "", ``
new Boolean();  //often use boolean literals instead like true or false
new Number(); /// literals are 1, 2, 3... 