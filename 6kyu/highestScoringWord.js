//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x){

    let highestScore = 0;
    let highestWord = '';

    // Split the string
    const words = x.split(' ');

    for(let i = 0; i < words.length; i++) {
      const word = words[i];
      let wordScoreCounter = 0;
      
      word.split('').forEach(letter => {
        wordScoreCounter += letter.charCodeAt(0) - 96;
        
        });
      
  
      if(wordScoreCounter > highestScore) {
       highestScore = wordScoreCounter;
        highestWord = word;
        } 

  }
    return highestWord;
    
    
  }