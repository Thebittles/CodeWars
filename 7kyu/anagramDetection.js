//https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript


// write the function isAnagram
var isAnagram = function(test, original) {
    // create hashes for each - compare counts
    test =  test.toLowerCase()
    original = original.toLowerCase()
    // Check to see if counts are different - 
    if (test.length !== original.length){
        return false
    }

    // Proceed with checking letters
    let testObj = {}
    let originalObj = {}

    for(let i = 0; i < test.length; i++){
        // count[s] ? count[s]++ : count[s] = 1;
        testObj[test[i]] ? testObj[test[i]]++ : testObj[test[i]] = 1;
        originalObj[original[i]] ?  originalObj[original[i]]++ :  originalObj[original[i]] = 1;
    }


    for(key in originalObj){

        // If there is not a key in the test obj return false
        if(!testObj.hasOwnProperty(key)){
            return false
            // If they don't have the same amount of letters return false
        } else if(originalObj[key] !== testObj[key]){
            return false
        }

    }
    return true 
};


 //console.log(isAnagram("foefet", "toffee")) // True
 //console.log(isAnagram("Buckethead", "DeathCubeK")) // True
 console.log(isAnagram("syIeWoPmGIFRCQzUok", "FRoDGIPesmoyIWQUCz")) // False syIeWoPmGIFRCQzUok FRoDGIPesmoyIWQUCz
// console.log(isAnagram("Buckethead", "DeathCubeK")) // True
// console.log(isAnagram("ound", "round")) // False
// console.log(isAnagram("apple", "pale")) // False
//console.log(isAnagram("mdshdogzdostzacr", "odazoshsrtocdzgmd")) // False  
//console.log(isAnagram("gxaqhgwjbyicfgbkhk", "fkcxhabghwjbfgqkiyg")) // False  
