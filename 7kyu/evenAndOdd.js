//https://www.codewars.com/kata/594adadee075005308000122/train/javascript

//input
// 126453	=> [264,153]
// 0126453	=> [0264,153]


function evenAndOdd(num){
    let ne = ""
    let no = ""
    num += ""
    let arr = num.split("")
    
    arr.forEach(el=> {
        if(Number(el) % 2 == 0){
            ne += `${el}`
        } else {
            no += `${el}`
        }
    });

    return [Number(ne), Number(no)]
  }



console.log(evenAndOdd(126453)) //[264,153]
console.log(evenAndOdd(3012))// [ [2, 31]