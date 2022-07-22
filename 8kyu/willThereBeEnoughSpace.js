//https://www.codewars.com/kata/5875b200d520904a04000003

// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting


function enough(cap, on, wait) {
   
    let total = on + wait
    //console.log(total)

    let spaceCap = cap - total
    //console.log(spaceCap)

    return spaceCap < 0 ? Math.abs(spaceCap) : 0

  }


console.log(enough(100, 60, 50)) // 10
console.log(enough(10, 5, 5)) // 0