//https://www.codewars.com/kata/539de388a540db7fec000642

// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as st


// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false



function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){

    let months = ["Januardy", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    if(enteredCode !== correctCode){
        return false
    }
    //Current
    let arr1 = currentDate.split(" ")
    // Expiration
    let arr2 = expirationDate.split(" ")
    console.log(arr1, arr2)

    //Check years first - IF current year is greater than expiration date
    if(arr1[2] > arr2[2]){
        return false
    }

    //If years are the same need to check day and month
    if(arr1[2] == arr2[2]){
        
        if(months.indexOf(arr1[0]) < months.indexOf(arr2[0])){
            return true
        }

    }

    // If current day is greater than expiration day 
    if(arr1[1] > arr2[1]){
        return false
    }

    return true

} 


console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"))
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"))