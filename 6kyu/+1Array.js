//https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript/6178a5b8705a00001436d259


// function upArray(arr) {

//     // IF last element is negative return null - or array is empty
//     if (arr[arr.length - 1] < 0 || arr.length == 0) {
//       return null
//     } else if (arr[arr.length - 1] == 9) {
//       arr[arr.length - 1] = 0
//       arr[arr.length - 2] += 1
//       return arr
//     } else {
//       arr[arr.length - 1] += 1
//       return arr
//     }
//   }
//[2, 3, 9] =>  [2, 4, 0].

let test = [2, 3, 9]
let test1 = [1,-9]
let test2 = [9,9,9]
 
function upArray(arr) {

    // IF last element is negative return null - or array is empty
    if (arr[arr.length - 1] < 0 || arr.length == 0) {
      return null
    } 
    // Join the array together and add 1 ot the number
    let num = Number(arr.join("")) + 1
    // Conver back to string
    num += ""
    // Split back into an array and map over to convert back to num
    let array = num.split("").map(el => Number(el))
    
    return array

  }


  console.log(upArray(test))
  console.log(upArray(test1))
  console.log(upArray(test2))