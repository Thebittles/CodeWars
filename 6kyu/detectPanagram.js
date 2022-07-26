//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript


function isPangram(string){

    // Case doesn't matter 
    string = string.toLowerCase()
    // a-/ 97-122

    let cache = {}

    for(let i = 97; i <= 122; i++){
        cache[i] = 0
    }


    for(let i =0; i < string.length; i++){
        if(cache[string.charCodeAt(i)] >= 0){
            cache[string.charCodeAt(i)] += 1
        } 
    }


     for(key in cache){
        if(cache[key] == 0 ){
            return false
        }
     }
     return true
  }

  console.log(isPangram("The quick brown fox jumps over the lazy dog."))
  console.log(isPangram("This is not a pangram."))