//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript


//Clock shows h hours, m minutes and s seconds after midnight.

//Your task is to write a function which returns the time since midnight in milliseconds.

// Inpute constraints
//0 <= h <= 23
//0 <= m <= 59
//0 <= s <= 59




function past(h, m, s){
    //convert all inputs to seconds

    // Hours to seconds
    let Hs = (h * 60 * 60)
    // Minutes to seconds
    let Ms = (m * 60)
    // Total seconds
    let total_seconds = Hs + Ms + s

    //Convert total seconds to milliseconds
    let milliseconds = total_seconds * 1000
    return milliseconds
  }

past(1,0,1)