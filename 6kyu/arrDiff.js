//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
  
    let filtered = a.filter((el) => {
        if(!(b.includes(el)))
        return el
    })

  return filtered
}


console.log(arrayDiff([1,2], [1])) // [2]

console.log(arrayDiff([1,2,2], [1])) // [2,2]



console.log(arrayDiff([1,2,3], [1,2])) // [3]


[ -8, -5 ] to deeply equal [ -8, 0, -5 ]
console.log(arrayDiff([1,2,3], [1,2])) // [3]