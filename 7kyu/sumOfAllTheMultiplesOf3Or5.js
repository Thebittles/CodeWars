/* Sum of all the multiples of 3 or 5 -  https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/javascript */

// Sum all multiple of 3 or 5
// example 3 - 5 - 6 - 9

function findSum(n) {

  //take n for loop
  // check to see if current index is % 3 or 5 if so push to array
  // once loop is done add together the current array.
  let arr = [];
  for(var i = 0; i <= n; i++){
    if( i % 3 == 0 || i % 5 == 0){
      arr.push(i)
    }
  }
  console.log(arr)
  const reducer = (preVal, currenVal) => preVal + currenVal;

  return arr.reduce(reducer);
}

console.log(findSum(5))  // should return 8  - 3 + 5