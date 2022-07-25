// https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript


let test = [1, 4, 8, 7, 3, 15] // 8 [1, 7]

function sumPairs(ints, s) {
    let cache = {}
    let index = {}
 for(let i = 0; i < ints.length; i++){
    cache[ints[i]] = i
 }
 //console.log(cache)
 for(let i = 0; i < ints.length; i++){
    const missing = s - ints[i]
    if(cache[missing] && cache[missing] !== i){
        index[i] = [i, cache[missing]]
    }
 }

 for(key in index){
   if(index[key][0] - index[key[1]] < ){
     optimal
   }
 }

 console.log(index)

}





console.log(sumPairs(test, 8))
console.log(sumPairs([ 10, 5, 2, 3, 7, 5 ], 10)) //[ 10, 5, 2, 3, 7, 5 ] 10 =>3, 7 NOT 5, 5


// console.log(ints[j])