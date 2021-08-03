//Exercise 1:

//Create a function that accepts a single array as an argument. 
//Given an array of objects, with each object consisting of an "id", "name", and "score" key:

// Remove any objects that are missing any of the above fields or do not contain values for the above fields.
// Remove any objects where the "score" is lower than or equal to 50
// Remove any duplicates that have the same "id" and "name".
// Return the final array sorted by the "score" descending from highest to lowest, if there is a tie, 
//then sort by name ascending from A-Z.

// Note: If there are duplicate objects that have the same "id" and "name" and only differ by "score", 
//then keep the object with the highest "score".

// Example Input: [{"id": 1, "name": "Alice", "score": 60}, {"id": 2, "name": "Bob", "score": 50}, {"id": 1, "name": "Alice", "score": 50}, {"id": 3, "name": "", "score": 100}, {"id": 4, "name": "Bob", "score": 60}, {"name": "Bob", "score": 90}, {"id": 5, "name": "Charles", "score": 51}]

// Example Output: [{"id": 1, "name": "Alice", "score": 60}, {"id": 4, "name": "Bob", "score": 60}, {"id": 5, "name": "Charles", "score": 51}]

// Array = { id: ,
//          Name:  ,
//         Score:  
//         }

// 1.	Remove the duplicates with same id and name
//          a.	If dup has scores, keep the highest score
// 2.	Remove object with score lower than or equal to 50
// 3.	Remove objects with missing fields and/or values.
// 4.	Return sorted array by score descending from highest to lowest
// a.	If it’s a tie, sort by name from A-Z

//find the dups of each id first
//not using built-in functions:  set empty array
arr = [{"id": 1, "name": "Alice", "score": 60}, 
        {"id": 2, "name": "Bob", "score": 50}, 
        {"id": 1, "name": "Alice", "score": 50}, 
        {"id": 3, "name": "", "score": 100}, 
        {"id": 4, "name": "Bob", "score": 60}, 
        {"name": "Bob", "score": 90}, 
        {"id": 5, "name": "Charles", "score": 51},
        {"id": 5, "name": "Charles", "score": 52}];



function bestScore(arr){

    var removeScoreLowerThan50 = arr.filter(el => {return el.score > 50});
    var removeObjWithNoId = removeScoreLowerThan50.filter(el => {return el.id}); 
    var removeEmptyName = removeObjWithNoId.filter(el => {return el.name});
    
   //remove duplicates and the lowest score of a duplicate
    const newArr = Array.from(new Set(removeEmptyName.map(i => i.id)))
                    .map(id => {return removeEmptyName.find(i => i.id == id && i.score++)});
    
                 
    const sortedArr = newArr.sort((a,b) => {
        let sa = a.score, 
            sb = b.score,
            fa = a.name,
            fb = b.name;

            if(sa == sb){
                if(fa < fb){
                    return -1;
                }
                if(fa > fb){
                    return 1;
                }
            }else{
                return sa - sb;
            }
           
        });

    return sortedArr;

}

