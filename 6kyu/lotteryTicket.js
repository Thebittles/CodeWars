//https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// My Solution
function bingo(ticket, win){
    let cache = {
        mini: 0
    }

    // loop through ticket
    for(let i =0; i < ticket.length; i++){
        //[ 'ABC', 65 ]
        let arr = ticket[i][0].split("")
        for(let j = 0; j < arr.length; j++){
            if(arr[j].charCodeAt(0) == ticket[i][1]){
                cache.mini += 1
                break;
            }
        }
    }
    
    if(cache.mini < win){
        return "Loser!"
    } else {
        return "Winner!"
    }
 
}



console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2)) // Loser
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1)) // Winner

// Other solution
function bingo(ticket, win){
    var count = 0;
    
    ticket.forEach(game => {
      if (game[0].includes(String.fromCharCode(game[1]))) {
        count++;
      }
    });
    
    return (count >= win) ? "Winner!" : "Loser!";
  }