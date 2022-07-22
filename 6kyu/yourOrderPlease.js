//https://www.codewars.com/kata/55c45be3b2079eccff00010f


function order(words) {

  // Split words to array
  let arr = words.split(" ")

  let ordered = arr.map((word, index) => {
    let i = word.search(/[0-9]/)
    return arr[index] = [word, Number(word[i])]
  }).sort((a, b) => { return a[1] - b[1] })

  console.log(ordered)
  let result = ""

  for(let i =0; i < ordered.length; i++){

    if(i == ordered.length - 1){
      result += ordered[i][0]
    } else {
    result += ordered[i][0] + " "
    }
  }


  return result
}


let test = "is2 Thi1s T4est 3a"

console.log(order(test))


/* Cleaner Solution */

function order(words){
  
  return words.split(' ').sort(function(a, b){
      // Finds any digit in string and sorts off that
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}   