//https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

function doubleChar(str) {
    // Your code here
    let newStr = ""

    for(let i = 0; i < str.length; i++){
        newStr += (str[i] + str[i])
    }

    return newStr
  }


console.log(doubleChar("Britt"))
  
