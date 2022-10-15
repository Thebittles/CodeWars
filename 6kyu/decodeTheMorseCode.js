//https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript


// Split on spaces - This will give us each character that we need to decode

// Morse code table to refer
let table = { 
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
  };



decodeMorse = function(morseCode){
    // Split into each letter
    let arr = morseCode.split(" ")
    // Concatenate our decode morse into a sentence
    let sentence = ""

    //Loop through our array of morse
    for(let i = 0; i < arr.length; i++){
        if(table[arr[i]]){
            sentence += table[arr[i]].toUpperCase()
        } else if(arr[i] == "" && arr[i++] == ""){
            sentence += " "
        }
    }
    return sentence
  }



  console.log(decodeMorse('.... . -.--   .--- ..- -.. .')) // should return "HEY JUDE"