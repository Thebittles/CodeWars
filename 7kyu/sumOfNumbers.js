//https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum( a,b ){
    console.log(a, b)
  // if both nums are equal return a or b
  if(a == b){
      return a
  }

  let sum = 0
  let start = a < b ? a : b
  let end =  a < b ? b : a
  for(let i =start; i <= end; i++){
    console.log(i)
      sum += i
  }
  console.log(sum)
  return sum
}


console.log(getSum(0, -1))