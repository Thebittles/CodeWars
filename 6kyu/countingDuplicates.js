// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript


function duplicateCount(text){
    let obj = {}



    for(let i = 0; i < text.length; i++){
        if(obj[text[i].toLowerCase()] >= 0){
            obj[text[i].toLowerCase()] +=  1
        } else {
            obj[text[i].toLowerCase()] = 0
        }
    }

    let count =  0

    for(key in obj){
        if(obj[key] >= 1){
            count += 1
        }
    }

    return count
}

console.log(duplicateCount("aabbcde"))
console.log(duplicateCount("Indivisibilities"))
//console.log(duplicateCount("indivisibility"))