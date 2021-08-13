//speedlimit == 70 kph
//5 -> 1 point
//Math.floor()
//12 points -> suspended


// var speedLimit = 70;


// function checkSpeed(speed){
//     let findDifference = speed - speedLimit;  
//     if(findDifference > 5) return findDifference;
//     let addPoints = Math.floor(findDifference / 5);
//     console.log(addPoints);
//     if(addPoints > 12) return 'Your license is suspended';
// }



function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed <= speedLimit + kmPerPoint) 
        console.log('Ok');
    
    else{
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if(points >= 12)
        console.log('License Suspended')
        else 
        console.log('Point', points);
    }
}

checkSpeed(130);

//better way of writing this code
function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed <= speedLimit + kmPerPoint) {
        console.log('Ok');
        //using return will allow code to jump out insead of executing the rest of the code
        return;
    }
       
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if(points >= 12)
        console.log('License Suspended')
    else 
        console.log('Point', points);
    
}