// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

// complete the function
function solution(string) {
    if(!string){
        return ""
    }

    let newStr = "" // Return modified string

    //Loop through string and test for an uppercase 
    // ASCII uppercase letters is 65 - 90
    for(let i = 0; i < string.length; i++){
        // If it is a capital letter we need to add a space in our newStr along with the letter
        if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
            newStr = newStr + " " + string[i]
        } else {
            newStr += string[i]
        }
    }


    return newStr
}


// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
console.log(solution("camelCasing"))