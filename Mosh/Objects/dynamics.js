//dynamic objects means once you create them, you can always add or create new properties or methods, or remove existing ones


const anotherCircle = {
    radius: 1
}

//add new properties 
anotherCircle.color = "red";
//add new methods
anotherCircle.draw = function () {}

//delete properties/methods
delete anotherCircle.color;
delete anotherCircle.draw;

console.log(circle);

//using const means you can modify properties
//but it means you CANNOT reassign circle e.g. circle = {}