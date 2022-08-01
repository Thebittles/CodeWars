//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

// My solution
function count (string) {  
    console.log(string)

    let obj = {}

    // Empty String 
     if(!string){
        return {}
     }

    let i = string.length
    while(i--){
        if(obj[string[i]] >= 0){
            obj[string[i]] += 1
        } else {
            obj[string[i]] = 1
        }
    }
    return obj
  }

  console.log(count("aba"))


  // Other solution

  function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }