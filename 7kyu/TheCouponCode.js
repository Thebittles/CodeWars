//https://www.codewars.com/kata/539de388a540db7fec000642

// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as st


// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false



function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {

	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

	// If the codes don't match return false
	if (enteredCode !== correctCode) {
		return false
	}

	//Current
	let arr1 = currentDate.split(" ")
	// Expiration
	let arr2 = expirationDate.split(" ")
   
  //if the current year is less than the exp year
	if (Number(arr1[2]) < Number(arr2[2])) {
		return true
	}



	//Check years first - IF current year is greater than expiration date
	if (Number(arr1[2]) > Number(arr2[2])) {
		return false
		// Else if the current year is less than the exp year
	} 


	//If years are the same need to check day and month
	if (arr1[2] == arr2[2]) {

		// Check to see if the months are the same
		if (months.indexOf(arr1[0]) == months.indexOf(arr2[0])) {

			//If the months and year and day are same
			if (parseFloat(arr1[1]) == parseFloat(arr2[1])) {
				return true
				// If the month and year are same but current day is greater than exp day - false
			} else if (parseFloat(arr1[1]) > parseFloat(arr2[1])) {
				return false
			}

		}

		//If years are the same check month - if current month is less return true
		if (months.indexOf(arr1[0]) < months.indexOf(arr2[0])) {
			return true
		}

	}

}


//console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")) // True
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")) // False

//[ 'September', '5,', '2014' ] [ 'October', '1,', '2014' ] // True

console.log(checkCoupon("123", "123", "September 9, 2015", "October 1, 2015"))
console.log(checkCoupon("123", "123", "November 26, 2001", "September 2, 2012"))
//[ 'November', '26,', '2001' ] [ 'September', '2,', '2012' ]