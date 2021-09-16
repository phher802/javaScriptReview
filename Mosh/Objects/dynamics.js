//dynamic objects means once you create them, you can always add or create new properties or methods, or remove existing ones


const circle = {
    radius: 1
}

//add new properties 
circle.color = "red";
//add new methods
circle.draw = function () {}

//delete properties/methods
delete circle.color;
delete circle.draw;

console.log(circle);

//using const means you can modify properties
//but it means you CANNOT reassign circle e.g. circle = {}