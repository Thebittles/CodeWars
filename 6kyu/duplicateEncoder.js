// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript


// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word){
    var hash = {}
    // ignore captilization
    word = word.toLowerCase()

    // Loop through create our hashmap
    for(let i = 0; i < word.length; i++){
        // add key to hash
        if(!(word[i] in hash)){
            hash[word[i]] = 1
            //if key already exists increase value
        } else if (word[i] in hash){
            hash[word[i]] += 1
        }

    }

    //Loop through word compare against map if key has value > 1 = ) else ()
    console.log(hash)
    let newString = ""

    for(let i = 0; i < word.length; i++){
        // If the key value is greater than 1
        if(hash[word[i]] > 1){
            newString += ")"
        } else {
            newString += "("
        }
     }
     return newString
}

console.log(duplicateEncode("Britt"))

// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       // Take element, index, array
//       .map( function (a, i, w) {
//             // Find index of current letter and find last index of current letter 
//             // If they current letter index is the same as last index of current letter we know that there not a duplicate
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
//   }