


/* encrypt("012345", 1)  =>  "135024" */
/* encrypt("012345", 2)  =>  "135024"  ->  "304152" */

//console.log("First Test p1", encrypt("012345", 1))


function encrypt(text, n) {
  // This boils down to two things:
  // 1: grab all odd and even chars and concatenate them together
  // 2: do this "n" times
  let str = text
  let odd = ''
  let even = ''
  let numOfEncryptions = 0

  while (numOfEncryptions < n) {
    for (let i = 0, n = text.length; i < n; i += 2) {
      even = even + str[i]
      odd = odd + (str[i + 1] || '')
    }
    str = odd + even
    // reset odd and even
    odd = ''
    even = ''
    numOfEncryptions++
  }
  return str
}









let encryptedText = "135/0246"  //Encrypted by 1
let encryptedTexts = "304152" //Encrypted by 2

function decrypt(text, n) {
  if (!text || n <= 0) return text //Check to see if text and n is number greater than 0 
  const arr = new Array(text.length) // Create an array with the same amount on indexes as our string
  let numOfEncryptions = n

  while (numOfEncryptions > 0) {
    j = 0; // current string index
    for (let i = 1; i < text.length; i += 2) { //i is for the index in our array
      // i starts at 1 then goes to 3 then 5
      // first three letters in string are the odd indexs numbers
      arr[i] = text[j]
      j++ //move up one in the string index
    }
    console.log("Array after first loop", arr)
    //now we need to loop through the even indexs of our array and assign the rest of our string index 
    // j value is currently at three
    for (let i = 0; i < text.length; i += 2) {//i starts at  0 then to 2 then 4
      arr[i] = text[j]
      j++
    }
    console.log("Array after second loop", arr) // logging to show what are current array looks like
    //now we need to join our array back to a string 

    text = arr.join("")
    console.log("Final result", text)
    numOfEncryptions--

  }
  return text

}

decrypt("1350246", 1)
//decrypt("304152", 2)
