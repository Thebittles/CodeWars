/* https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript */



function highAndLow(numbers){
  // ...

  // Take string and split at space
  // Take our array and map to numbers
  // Sort our numbers
  // Return first and last index convert to string.

  var numArr = numbers.split(" ").map(el => {
    return Number(el)
  }).sort((a, b) => { return b - a})

  //console.log(numArr)

  return `${numArr[0]} ${numArr[numArr.length - 1]}`

}

console.log(highAndLow("5 1 2 3 4"))