//https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript/6178a5b8705a00001436d259

function upArray(arr) {

    // IF last element is negative return null - or array is empty
    if (arr[arr.length - 1] < 0 || arr.length == 0) {
      return null
    } // Also need to check it array contains a negative number or a double digit number
     else if(Math.min(...arr) < 0 || Math.max(...arr) > 9){
      return null
     }


    // Join the array together to form a large number
    let num = Number(arr.join(""))
  
     //Check to see if num is a bigInt
     console.log(Number.MAX_SAFE_INTEGER < num)
     if(Number.MAX_SAFE_INTEGER < num){
       let value = BigInt(num) + ""
         return value.split("").map(el => Number(el))
     }

    // Convert back to string
    num += ""

     // Split back into an array and map over to convert back to num
     let array = num.split("").map(el => Number(el))
    
    // return array

  }

  console.log(upArray([ 9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7 ])) 

  // expects [9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8] 
  // got     [9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 6, 0, 0, 0]




  function upArray(arr){
    // base check for falsy arr value
    if(!arr.length || !arr)
      return null
    
    let added = false
    for(let i = arr.length -1; i >= 0; i--){
      // check for < 0 value if found return null invalid arr
      if(arr[i] < 0 || arr[i] > 10)
        return null
      
      // if the value has been added just go to the next loop continuing to look 
      // for falsy values
      if(added) continue
      
      // try to add 1 to arr[i] val
      arr[i] += 1
      if(arr[i] > 9){
        arr[i] = 0
      }
      // if adding 1 didn't bump it over value 9 we have successfully added 1
      else {
        added = true
      }
      
      // in the case i is 0 and the number still hasn't been 
      // successfully added
      if(i === 0 && !added){
        arr[0] = 1
        arr.push(0)
      }
      
    }
    
    return arr
  }