// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript



// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"



function formatDuration (seconds) {
     var time = {
        year: 31536000,
        month: 2628288,
        day: 86400,
        hour: 3600,
        min: 60,
        seconds: 1
     }
     let str = ""
     // Loop through time object and check to see if time value goes into total seconds passed in
     for(key in time){
        console.log(key, seconds / time[key])
        if(seconds / time[key] >= 1){
            str += `${Math.round(seconds / time[key])} ${key} `

            let leftover = seconds & time[key]
            for(key in time){
                if(leftover / time[key] >= 1){
                    str += `${Math.round(lef / time[key])} ${key} `
                }
            }

        }
     }

     return str

  }


  //The best practice
function formatDuration (seconds) {
    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];
  
    if (seconds === 0) return 'now';
    
    for (var key in time) {
      if (seconds >= time[key]) {
        var val = Math.floor(seconds/time[key]);
        res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
        seconds = seconds % time[key];
      }
    }
   
    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
  }
  

  console.log(formatDuration(62)) // 1 minute  and 2 seconds


//   31536000 Seconds in a year
//    2628288 Seconds in a month
//       3600 Seconds in an hour
