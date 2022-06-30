/* Consecutive strings - https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript */

var arr = ["zone", "abigail", "theta", "form", "libe", "zas"];
var k = 2;


function longestConsec(strarr, k) {
  // your code
  let n = strarr.length
 if( n == 0 || k > n || k <= 0){
   return "";
 }
 var result = '';
 for(var i = 0; i< n; i++){
  //for loop that runs the lenght of given array
  var currentStr = strarr.slice(i, k+i).join('');
  //slice from current index of array to // given number (k) + current index and join them
  console.log(currentStr)
  // check to see if current join of strings is longer than current result if true update result
  if(currentStr.length > result.length){
    result = currentStr;
  }
 }
return result;

}



console.log(longestConsec([], 3))
console.log(longestConsec(arr, k))