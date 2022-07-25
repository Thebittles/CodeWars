//https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript


// Take the first number, 220, and divide by 16. 220 / 16 = 13.75, which means that the first digit of the 6-digit hex color code is 13, or D.
// Take the remainder of the first digit, 0.75, and multiply by 16. 0.75 (16) = 12, which means that the second digit of the 6-digit hex color code is 12, or C.

function rgb(r, g, b) {
	// complete this function  

	let hexadecimal = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

	let hex = ""

	let rgb = [r, g, b]

		for (let i = 0; i < rgb.length; i++) {

			if (rgb[i] == 0 || rgb[i] < 0) {
				hex += "00"
			} else if (rgb[i] > 255) {
				hex += "FF"
			}	else {

				let decimal = rgb[i] / 16

				let first = Math.floor(decimal)

				var second = (decimal % 1) * 16

				if(second == 0){
					hex += `${hexadecimal[first - 1]}0`
				} else if (first == 0) {
					hex += `0${hexadecimal[second - 1]}`
				} else {
					hex += `${hexadecimal[first - 1]}${hexadecimal[second - 1]}`
				}

			}
	}

	return hex
}

//console.log(rgb(220, 20, 0))
//console.log(rgb(255, 255, 255))
//console.log(rgb( 300, 255, 255 ))
//console.log(rgb( 176, 158, 18 )) //176,158,18
console.log(rgb( 64, 35, 8 ))// 64,34,8