/* +1 Array - https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript */



let test = [4, 3, 2, 5] // 4326
let test0 = [2, 3, 9] //240
let test1 = [1, -9]  //null

function upArray(arr) {
  // ... 
  //console.log(arr[arr.length - 1]) // gives us the last number in array 
  //console.log(arr.length - 1) //gives us the index of last element
  if (arr[arr.length - 1] < 0) {
    return null
  } else if (arr[arr.length - 1] == 9) {
    arr[arr.length - 1] = 0
    arr[arr.length - 2] += 1
    return arr
  } else {
    arr[arr.length - 1] += 1
    return arr
  }
}


upArray(test)
console.log(upArray(test1))