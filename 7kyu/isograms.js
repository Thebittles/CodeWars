/* Isograms - https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript */

var test1 = 'Dermatoglyphics'
var test2 = 'moOse'

function isIsogram(str) {
  //...
  //Take string loop over
  // compare i and next i+ to each other if the are the same charCode return true
  //else return false

  var result = []
  var exam = str.toLowerCase().split("")

  for (var i = 0; i < exam.length; i++) {
    if (exam[i] === exam[i + 1]) {
      result.push(exam[i])
    }

  }

  if (result.length == 0) {
    return true
  } else return false

}

//console.log(isIsogram(test1));
console.log(isIsogram(test2));