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

//Factory Functions -- a way to produce objects
//this example also simplifies the circle object above
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