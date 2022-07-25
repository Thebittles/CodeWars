//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript


var isSquare = function(n){
    
    let sq = Math.sqrt(n)
     
    return (sq - Math.floor(sq)) == 0; 

  }


console.log(isSquare(-1))