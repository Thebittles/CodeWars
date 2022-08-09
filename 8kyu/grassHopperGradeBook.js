//https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript


function getGrade (s1, s2, s3) {

   let total = Object.values(arguments).reduce((prev, n) => {return prev + n }) 
   let length = Object.keys(arguments).length
   let avg = total/length


    if(avg >= 90 && avg <= 100){
        return "A"
    } else if(avg >= 80 && avg < 90){
        return "B"
    } else if (avg >= 70 && avg < 80){
        return "C"
    } else if (avg >=  60 && avg < 70){
        return "D"
    } else {
        return "F"
    }


  }


console.log(getGrade(80,80,80))

