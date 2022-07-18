// https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/javascript

function getCount(str) {
    var vowelsCount = 0;
    // Convert string to all lower case
    str.toLowerCase()

    var vowels = ["a", "e", "i", "o", "u"]
    //loop through the string

    for (var i = 0; i < str.length; i++) {
  
        if(vowels.indexOf(str[i]) >= 0){
            vowelsCount += 1
        }

    }
    return vowelsCount;
  }