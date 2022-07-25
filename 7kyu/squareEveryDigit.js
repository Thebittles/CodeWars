//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num){
    num += ""
    return Number(num.split("").map(num => num**2).join(""))
  }


  console.log(squareDigits(3212)) // 9414