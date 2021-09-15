//pass in a number of rows and each roll will 
//print stars starting from row one with one star and so forth

//showStars(10);

function showStars(rows){
    for(let row = 1; row <= rows; row++){
        let pattern = "";
        for(let i = 0; i < row; i ++){
            pattern += "*";
        }
        console.log(pattern);
    }
}