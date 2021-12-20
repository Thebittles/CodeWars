/* https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript */

let test = "abcd"

function accum(s) {
  // your code
  const arr = [];
  //first letter is capitilazed
  // depending on position depends on how many letters
  let lowerCaseStr = s.toLowerCase()
  
  //iterating through our string
  for(let i = 0; i < lowerCaseStr.length; i++){

    let str = lowerCaseStr[i].toUpperCase()

      for(let j = 0; j < i; j++){
        str += lowerCaseStr[i] //Ccc
      }
      arr.push(str)

  }// close outside loop
  console.log(arr)
  return arr.join("-")
}


console.log(accum(test))

