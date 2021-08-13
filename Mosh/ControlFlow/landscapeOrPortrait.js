function isLandscape(width, height){
    //width is greater than height == landscape
    //height is greater than width == portrait

    //option1: if statement
    // if(width > height) return true;
    // return false;

    //option 2: using tenary operator
    //return (width > height) ? true : false;

    //option 3: the cleanest way
    //no need to write out the true or false because you simply need 
    //to return the value: if width is greater than height than it will evaluate to true
    return (width > height);
}

let size = isLandscape(300, 500);
//let size = isLandscape(5, 10);
console.log(size);