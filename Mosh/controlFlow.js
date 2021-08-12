//if.. else
//hour  -- if hour is between 6am and 12pm : Good Morning
//-- if hour is between 12pm and 6pm : Good Afternoon
//otherwise: Good Evening

let hour = 19;

if(hour >=6 && hour < 12){
    console.log("Good Morning")
}else if(hour >= 12 && hour <= 18){
    console.log("Good Afternoon")
}else{
    console.log("Good Evening");
}