// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript


function bmi(weight, height) {
    
    bmi = (weight / height**2)

    if(bmi < 18.5){
        return  "Underweight"
    } else if (bmi <= 25 && bmi > 18 ) {
        return "Normal"
    } else if (bmi <= 30 && bmi > 25){
        return "Overweight"
    } else return "Obese"

  }

console.log(bmi(80, 1.80))