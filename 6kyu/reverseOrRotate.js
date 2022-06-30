// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript


//Incomplete

/* 
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).


If
sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".


*/

function revrot(str, sz) {  
    // string is empty or sz is less than or zero 
    if(!str || sz <= 0){
        return ""
        // sz is greater than length of str return empty string
    } else if (sz > str.length) {
        return ""
    }

    // Cut string into chunks - amount of chunks we will have if odd leave off the last chunk if less than sz
    const numChunks = Math.floor(str.length/sz)

    //Create new array based off numChunks length
    const chunks = new Array(numChunks)
    // Loop through string, take the amount of chunks and the size of chunks
    for(let i = 0, j = 0; i < numChunks; i++, j += sz){
        // take the first chunk
        chunks[i] = str.substr(j, sz)

    }

    let newChunks = chunks.map((chunk) => {

        // Reverse
        splitChunk = chunk.split("").map(el => Number(el))
        const sum = splitChunk.reduce((prev, current) => prev + current)
        if(sum % 2 == 0){
            return chunk.split("").reverse().join("")
        } else {
            // Rotate
         return  chunk = rotate(chunk, 1)
        }

    })

    // Rotate function
    function rotate(text, num){
        const n = num % text.length
        return text.slice(n) + text.slice(0, n)
    }

    return newChunks.join("")
}

console.log(revrot("733049910872815764", 5))


/* If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string. */