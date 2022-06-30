//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript


input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
//output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){

    let output = []

    //loop through data aka each player
    for(let i = 0; i < data.length; i++){
        // If player age is over 55 and has a handicap greater than 7 they are considered senior
        if(data[i][0] >= 55 && data[i][1] > 7){
            output.push("Senior")
        } else {
            output.push("Open")
        }
    }
    return output
  }


console.log(openOrSenior(input))