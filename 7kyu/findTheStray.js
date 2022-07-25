//https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

function stray(numbers) {
    let cache = {}
    numbers.forEach(el => {
        if(cache[el]){
            cache[el] += 1
        } else {
            cache[el] = 1
        }
    })
    for(const key in cache){
        if(cache[key] == 1){
            return Number(key)
        }
    }
  }

console.log(stray([1, 1, 2]))
console.log(stray([17, 17, 3, 17, 17, 17, 17]))