/* https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript */

function twoSum(arr, target) {
  // ...
  var object = {}
  for(var i = 0; i < arr.length; i++){
      object[arr[i]] = i
      
  }
  //console.log(object)  

  for(var i = 0; i < arr.length; i++){
     let diff = target - arr[i]

     if(object.hasOwnProperty(diff) && object[diff] !== i){
      return [i, object[diff]];
     }
      
  }

}

twoSum([1,2,3], 4)