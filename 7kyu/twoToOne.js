//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript


// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

function longest(s1, s2) {

    let s3 = [...new Set(s1)].concat([...new Set(s2)])

    let unique= [...new Set(s3)].sort().join("")
    
    return unique
 
  }


console.log(longest( "xyaabbbccccdefww","xxxxyyyyabklmopq"))