//write a function that showas all the properties of the object that is passed in

const movie = {
    title: 'Avengers: Endgame',
    releaseYear: 2019,
    rating: 10,
    director: 'Joe Russo and Anthony Russo '
}

function showProperties(obj){
    for(let [key, value] of Object.entries(obj)){
        console.log(key, value);
    }
}

//to display only string properties
function showStringProperties(obj){
    for(let key in obj){
        if(typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}