//https://www.codewars.com/kata/596c6eb85b0f515834000049/train/javascript

var replaceDots = function(str) {
    // Have to escape the char and the g for all cases
    
    return str.replace(/\./g, "-");
  }


console.log(replaceDots("one.two.three"))