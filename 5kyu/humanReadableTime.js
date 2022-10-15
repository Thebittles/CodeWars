//https://www.codewars.com/kata/52685f7382004e774f0001f7


// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)




// function humanReadable (seconds) {
//     if(seconds >= 3600){
//         let total = seconds / 3600
//         let hour = Math.floor(total) > 9 ? `${Math.floor(total)}` : `0${Math.floor(total)}`
//         let mins = Math.floor((total - Math.floor(total)) * 60) > 9 ?  `${Math.floor((total - Math.floor(total)) * 60)}` : `0${Math.floor((total - Math.floor(total)) * 60)}`
//         let second = Math.round(((total - Math.floor(total)) * 60 - Math.floor((total - Math.floor(total)) * 60 )) * 60) > 9 ? `${seconds - (((hour * 60) * 60) + (mins * 60))}` : `0${seconds - (((hour * 60) * 60) + (mins * 60))}`
//         if(second == "60"){
//             return `${hour}:${mins}:00`;
//         } else {
//             return `${hour}:${mins}:${second}`;
//         }
//     } else if (seconds >= 60) {
//         let hour = '00'
//         let mins = Math.floor(seconds / 60) > 9 ? `${Math.floor(seconds / 60)}` : `0${Math.floor(seconds / 60)}`
//         let second = Math.round(((seconds/60) - Math.floor(seconds / 60)) * 60) > 9 ? `${Math.round(((seconds/60) - Math.floor(seconds / 60)) * 60)}` :  `0${Math.round(((seconds/60) - Math.floor(seconds / 60)) * 60)}`
//         return `${hour}:${mins}:${second}`
//     } else {
//         let second = seconds > 9 ? `${seconds}` :`0${seconds}`
//         return `00:00:${second}`
//     }


//   }


function humanReadable (seconds) {
    let hour
    let min
    let sec
    if(seconds >= 3600){
        hour = Number((seconds / 3600).toFixed(0)) > 9 ? (seconds / 3600).toFixed(0) : `0${(seconds / 3600).toFixed(0)}`
        //console.log(hour)
    } else {
        hour = '00'
    }
    console.log(hour)
  }

console.log(humanReadable(3600)) // '01:00:00'
console.log(humanReadable(3599)) // '00:59:59'
console.log(humanReadable(8274)) // '02:17:54'
console.log(humanReadable(45296)) // '12:34:56'
console.log(humanReadable(355560)) // '98:46:00'

//> 9 ? `${Math.ceil((((total - Math.floor(total)) * 60) - Number(mins)) * 60)}` : `0${Math.ceil((((total - Math.floor(total)) * 60) - Number(mins)) * 60)}`