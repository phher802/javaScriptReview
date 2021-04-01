//Anagrams
//problem example: Given two strings, write a function to determine if the 2nd string is an anagram of the first
//An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

//examples:
validAnagram('','')  //true
validAnagram('aaz', 'zza') //false
validAnagram('anagram', 'nagaram')  //true
validAnagram('rat', 'car') //false
validAnagram('awesome', 'awesom') //false
validAnagram('qwerty', 'qeywrt') //true
validAnagram('texttwisttime', 'timetwistext')  //true


//understand the problem:  don't assume that both are valid words, only focus on the frequency of the letters
//break it down: 
    // create an edgecase to return false if length of both strings don't match
    // loop thru first string to check if letter already exists in object list, 
            // add to value of each key character
    // loop thru 2nd string to see if each of its character exists in the object list
            //if it exists then subtract it from object list until each char's value = 0
            // what if the value becomes -1? 

function validAnagram(first, second){
    if(first.length !== second.length){
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++){
        let letter = first [i];
        //if letter exists in object list, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i ++){
        let letter = second[i];
        // if can't find letter or letter is zero then it's not an anagram, return false
        // zero is falsey so it will return false if lookup[letter] = 0
        if(!lookup[letter]){
            return false;
        }else{
            lookup[letter] -= 1;
        }
    }
    return true;
}