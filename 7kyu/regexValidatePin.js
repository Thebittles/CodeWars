// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

function validatePIN (pin) {
    if(pin < 0 ||  (pin - Math. floor(pin)) !== 0){
        return false
    }

    if(Number(pin).toString() !== pin){
        return false
    }

    pin += ""


    if(pin.length == 5){

        return false
    }
    // If less than 4 or more than 6 - automatic false
    if(pin.length < 4 || pin.length > 6 ){
        return false
    }
    // If within length boundaries - test to see if it contains any letters
    const regex = /[a-zA-z]/g
    const letters = pin.match(regex)
    if(letters != null){
        return false
    }
    let four_num = pin.match(/[0-9]{4}/g)
    let six_num= pin.match(/[0-9]{6}/g)
    let decimal = pin.match(/\./g)


    if(four_num || six_num){
        if(decimal){
            return false
        }
        return true
    } 
    return false
  }


  //console.log(validatePIN(123456))
  //console.log(validatePIN(123))
  //console.log(validatePIN(12345))
  //console.log(validatePIN(0.234))
 // console.log(validatePIN(12.0))
 // console.log(validatePIN(123))
 // console.log(validatePIN(+111))
  console.log(validatePIN(09876))