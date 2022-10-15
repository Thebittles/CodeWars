//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

//   16  -->  1 + 6 = 7
//   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2




function digitalRoot(n) {

    //Check to see if n is less than 10
    if(n < 10){
        return n
    } else {
        n += ""
       let number = reduce(n)
       if(number < 10){
        return number
       } else {
        number += ""
        reduce(number)
       }
    }


}

function reduce(n){
    return n.split("").map(el => Number(el)).reduce((prev, curr) => prev + curr)
}

console.log(digitalRoot(942))
console.log(digitalRoot(15))