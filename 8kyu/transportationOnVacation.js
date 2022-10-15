// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript


// Day rate - 40$
// 7 Days > -50$ off total
// 3 Day > -20$ off total


function rentalCarCost(d) {
    // Your solution here
  let total = d*40

  if(d >= 7){
    total -= 50
    
  } else if (d >= 3 && d < 7){
    total -= 20
  } 
  return total
  }


  console.log(rentalCarCost(8))


  