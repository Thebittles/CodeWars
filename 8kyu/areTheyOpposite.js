// https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7/train/javascript

function isOpposite(s1,s2){

    // If both strings are empty - return false
    if(s1.length == 0 && s2.length == 0){
        return false
    }

    // Check to see if one string is longer than other
    if(s1.length > s2.length || s1.length < s2.length){
        return false
    }
    // A - 65  B - 66 - difference 32
    // a - 97 b - 98
    let arr = []
     
    // As long as the value is 32 negative or postive we don't care - means they are opposite in case
    for(let i = 0; i < s1.length; i++){
        if(Math.abs(s1.charCodeAt(i) - s2.charCodeAt(i)) != 32){
            // If they char code subtracted from each don't == 32 they are not the same char - OR they are the same case
            arr.push(false)
        } else {
            arr.push(true)
        }
    }
    
    // If our index does not contain a false return true 
    if(arr.indexOf(false) == -1){
        return true
    } else  {
       return  false
    }

}


// s1="ZBxdZa"  s2="zbXDzA" 


console.log(isOpposite("ZBxdZa", "zbXDzA" ))
console.log(isOpposite("Lrbc", "lrbC" ))

