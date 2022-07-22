// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript


// [100, 40, 34, 57, 29, 72, 57, 88], 75) - Returns True
// [12, 23, 34, 45, 56, 67, 78, 89, 90], 9) - Returns False

function betterThanAverage(classPoints, yourPoints) {
    
    // Take our point and add to class array
    // Get average
    // Compare larger or smaller to return true or false.
    classPoints.push(yourPoints)
    let accum = 0;

    for(let i=0; i < classPoints.length; i++){
        accum += classPoints[i]
    }

    let avg = (accum/classPoints.length)
    
    // if(yourPoints > avg){
    //     return true
    // } else {
    //     return false
    // }
    return yourPoints > avg ? true : false
  }


  console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)) // True
  console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)) // False
