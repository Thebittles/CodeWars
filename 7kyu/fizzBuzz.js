//https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript

//If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// 

//fizzbuzz(3) -->  [1, 2, "Fizz"]

// Return an array
function fizzbuzz(n)
{
    let arr = []

    for(let i = 0; i < n; i++){
        if((i + 1) % 3 == 0 && (i +1) % 5 == 0){
            arr.push("FizzBuzz")
        } else if((i + 1) % 3 == 0){
            arr.push("Fizz")
        } else if((i+1) % 5 == 0){
            arr.push("Buzz")
        } else {
            arr.push(i+1)
        }
    }
  return arr

}


console.log(fizzbuzz(3))
console.log(fizzbuzz(10))
