// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

//[false,1,0,1,2,0,1,3,"a"] => [false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let zeros = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            let removed = arr.splice(i, 1)
            zeros = zeros.concat(removed)
            i--
        }

    }
    arr = arr.concat(zeros)

    return arr

}

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]))
console.log(moveZeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9])) // [ 9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]