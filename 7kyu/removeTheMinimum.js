// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

let test = [2,2,1,2,1]
let test1 = [5,3,2,1,4]

function removeSmallest(numbers) {
   
    if(numbers.length == 0){
        return numbers
    }

    // Find the smallest number and index of it
    let smallNum = numbers[0]
    let index = 0

    for(let i = 0; i <= numbers.length; i++){
        if(numbers[i] < smallNum){
            smallNum = numbers[i]
            index = i
        }
    }
     let result = [...numbers]
    result.splice(index, 1)

    return result

  }



console.log(removeSmallest(test))
console.log(removeSmallest(test1))


/* Fater Solution */
function removeSmallest(numbers){
     const result = numbers.slice(0)
     let smallestValue = numbers.indexOf(Math.min(...numbers))
     result.splice(smallestValue, 1);
    return result
    }