// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript


let test = [ 3, 10, 3, 3, 3 ]

function findUniq(arr) {

	let obj = {}
	let result 
	for (let i = 0; i < arr.length; i++) {

		if (!(obj[arr[i]])) {
			obj[arr[i]] = 1
		} else {
			obj[arr[i]] += 1
		}

	}
	
	for(key in obj){
		if(obj[key] == 1){
			result = Number(key)
		}
	}

	return result
}// closes function

console.log(findUniq(test))

