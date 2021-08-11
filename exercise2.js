//Create a function that accepts three arguments: "type", "id", and "score". 
//Inside the function, will contain a hardcoded array of objects.



//Example: ScoreArray = [{"id": 1, "score": 1}, { "id": 2, "score": 2}].

//"type" will always be required and consists of four possible values ("create", "read", "update", "delete")
//"id" will only be required when ("read", "update", "delete") type is passed.
//"score" will only be required when ("create", "update") type is passed.

//If "create" type is passed, then add a new object to the ScoreArray with the value of the "score" 
//that was passed and return the full ScoreArray. The "id" field should always be the max "id" of the ScoreArray + 1.

//If "read" type is passed, then return the corresponding object that matches the "id" that was passed.

//If "update" is passed, then update the "score" value of the corresponding object that matches the "id" 
//that was passed and return the full ScoreArray.

//If "delete" is passed, then delete the corresponding object that matches the "id" that was passed and return the full ScoreArray.



//Note: Do not worry about persisting the changes made to the ScoreArray. 
//Feel free to operate with the same hardcoded ScoreArray for each individual request.

//1. create empty scoreArray
//2. throw error if type parameter is falsey

var ScoreArray = [{"id": 1, "score": 1}, { "id": 2, "score": 2}]

function insertObj(arr, obj){
    arr.push(obj);
    console.log(arr);
}


function addToArray(arr, type, id, score){
    //if(type == undefined) throw ("Type is required: create, read, update, delete");

    var newId = arr.map(el => el.id).sort((a,b) => a - b)[arr.length - 1] + 1;

    if(type == "create"){
        let object = {id: newId, score: score}
        insertObj(arr, object);       
    }

    if(type == "read"){
        for(let i in arr){
            if(arr[i]["id"] == id){
                return arr[i];
            }
        }
    }

    if(type == "update"){
        for(let i in arr){
            if(arr[i]["id"] == id){
                arr[i]["score"] = score;
            }
        }
        return arr;
    }

    if(type == "delete"){
        for(let i in arr){
            if(arr[i]["id"] == id){
                arr.splice(i, 1);
            }
        }
        return arr;
    }

}



