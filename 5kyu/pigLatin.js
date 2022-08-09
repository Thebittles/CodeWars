//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript


// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    let ascii = [33, 46, 63]
    // Move first letter of each word to end and add "ay"
    let arr = str.split(" ").map(word => {
        if(ascii.indexOf(word.charCodeAt(0)) !== -1){
            return word
        } 
        return word = word.substr(1) + word[0] + "ay"
    })

    return arr.join(" ")

  }


  console.log(pigIt('Pig latin is cool')) // 'igPay atinlay siay oolcay'
  console.log(pigIt('This is my string')) // //hisTay siay ymay tringsayThis is my string
  console.log(pigIt('tempora o mores !')) // //hisTay siay ymay tringsayThis is my string

