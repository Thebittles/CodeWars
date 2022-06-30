// Largest pair sum
//https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

let arr = [10, 14, 2, 23, 19];

function largestPairSum(numbers)
{
  let sorted = numbers.sort((a, b) => a-b)
  return sorted[sorted.length - 1] + sorted[sorted.length - 2]

}

console.log(largestPairSum(arr))