//https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

const reverseSeq = n => {
    let arr = []

    for(let i = n; i > 0; i--){
        arr.push(i)
    }
    return arr
  };


  console.log(reverseSeq(5))