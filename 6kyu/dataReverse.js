// https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript

//11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

//10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)

let test = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

function dataReverse(data) {
    //take array, and split every 8 elements

    let bytes = []

    const chunkSize = 8;


    for(let i = 0; i < data.length; i += chunkSize){
        const chunk = data.slice(i, i + chunkSize)
        bytes.push(chunk)
    }
    
    //The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. - Sim to reducer
    console.log(bytes.reverse().flat())

    bytes.reverse()
    // another way to flatten 2darray
    const flattened = arr => [].concat(...arr)

    const result = flattened(bytes)
    return result

  }


  console.log(dataReverse(test))