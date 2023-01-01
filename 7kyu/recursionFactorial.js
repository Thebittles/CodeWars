//https://www.codewars.com/kata/5694cb0ec554589633000036/train/javascript

// /5! = 5 * 4 * 3 * 2 * 1 = 120.

const factorial = n => {
    // If n is 0 return 1
    if(n == 0){
        return 1
    } else {
        //We call the function over subtracting till we get to 1.
            return n * factorial(n - 1)
        }
};


  console.log(factorial(0)) // 1
  console.log(factorial(5)) // 120

