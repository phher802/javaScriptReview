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