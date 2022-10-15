// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

// Below 5 = 0
// Above 5 = 1

function fakeBin(x){
    
    let bin = ""

  for(let i = 0; i < x.length; i++){

    Number(x[i]) >= 5 ? x[i] = '1': x[i] = '0'
    if(Number(x[i]) >= 5 ){
        bin += '1'
    } else {
        bin += '0'
    }

  }
  return bin

}


console.log(fakeBin('444555111'))