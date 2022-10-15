//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript


function disemvowel(str) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let newStr = ''

    let arr = str.split(" ")

    // Loop through sentence
    for (let i = 0; i < arr.length; i++) {
        // Loop through each letter of each word
        for (let j = 0; j < arr[i].length; j++) {
            // Test to see if letter is a vowel
            if (vowel.indexOf(arr[i][j].toLowerCase()) == -1) {
                newStr += arr[i][j]
            }
        }

        //Test to see if we are at end of sentence
        if(i !== arr.length - 1 ){
         // Create the space in the sentence
        newStr += " "
        }

    }

    return newStr;
}



console.log(disemvowel("This website is for losers LOL!")) // "Ths wbst s fr lsrs LL!"