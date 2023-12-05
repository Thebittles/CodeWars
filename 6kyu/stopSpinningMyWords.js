//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript


function spinWords(string){
    let arr = string.split(" ");
    let updatedArr = arr.map( word => {
        if(word.length >= 5){
            return word.split("").reverse().join("")
        } else {
            return word;
        }
    })

    return updatedArr.join(" ")
  }

  console.log(spinWords("Welcome")) //emocleW
  console.log(spinWords("Hey fellow warriors")) //emocleW