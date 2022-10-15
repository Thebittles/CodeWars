//https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript/6178a5b8705a00001436d259


  console.log(upArray([ 9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7 ])) 

  // expects [9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8] 
  // got     [9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 6, 0, 0, 0]

  function upArray(arr){
    // If empty array or not array 
    if(!arr.length)
      return null
    
      let added = false
      // Traverse backwards through array
      for(let i = arr.length - 1; i >=0; i--){
        // Check for negative number or value greater than 10
        if(arr[i] < 0 || arr[i] > 10){
          return null
        }

        if(added) continue

        // Try to add 1 to current value in array
        arr[i] += 1
        // Check to see if value is greater than 9 - increment the next number
        if(arr[i] > 9){
          arr[i] = 0
        } else {
          // If adding one didn't bump it over 9 - successfully added 1
          added = true
        }

      // in the case i is 0 and the number still hasn't been 
      // successfully added
        if(i === 0 && !added){
          arr[0] = 1
          arr.push(0)
        }

        
      }

  }



