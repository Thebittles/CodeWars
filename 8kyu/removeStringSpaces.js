// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript


 var test = '8 j 8   mBliB8g  imjB8B8  jl  B'
// output:  '8j8mBliB8gimjB8B8jlB'

function noSpace(x){
  var array =  x.split(" ").join("")
  return array
}


console.log(noSpace(test))