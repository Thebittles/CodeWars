//https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript


// write the function isAnagram
var isAnagram = function(test, original) {
    test = test.toLowerCase()
    original = original.toLowerCase()

    if(test.length > original.length){
        return false
    }

    let cache = {}
    for(let i = 0; i < original.length; i++){
        cache[original[i]] = 0
    }
    
    for(let i =0; i < test.length; i++){
        if(!(cache.hasOwnProperty(test[i]))){
            return false
        } else if (cache.hasOwnProperty(test[i])){
            cache[test[i]] += 1
        }
    }
    

    for(key in cache){
        if(cache[key] == 0){
            return false
        }
    }
    console.log(cache)
    return true

};


// console.log(isAnagram("foefet", "toffee")) // True
// console.log(isAnagram("Buckethead", "DeathCubeK")) // True
// console.log(isAnagram("ound", "round")) // False
// console.log(isAnagram("apple", "pale")) // False
console.log(isAnagram("mdshdogzdostzacr", "odazoshsrtocdzgmd")) // False  
console.log(isAnagram("gxaqhgwjbyicfgbkhk", "fkcxhabghwjbfgqkiyg")) // False  
