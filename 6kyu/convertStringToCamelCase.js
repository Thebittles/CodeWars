//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript





function toCamelCase(str) {
	// Check to see if we've been passed an empty string
	if (!str.length) {
		return ""
	}
	// Concatenate our new camelCase string
	let newString = ""

	// Loop over each character
	for (let i = 0; i < str.length; i++) {
		// If we hit an underscore or dash capitalize next letter and add to our string 
		if (str[i] == "_" || str[i] == "-") {
			// Check to make sure we haven't gone past the length of the string - Meaning last char in string is _ or -
			if (str[i + 1] == undefined) {
				break
			}
			newString += str[i + 1].toUpperCase()
			// Need to skip next letter - because we just added it 
			i++

		}
		// Add the next char
		else {
			newString += str[i]
		}
	}

	return newString

}





console.log(toCamelCase("the_stealth_warrior")) // theStealthWarrior
console.log(toCamelCase("The-Stealth-Warrior")) //"TheStealthWarrior"
console.log(toCamelCase("A-B-C")) // ABC 
console.log(toCamelCase("Parvati-")) // ABC 








/* 

function toCamelCase(str){
		// Check to see if argument is empty string first
		if(!str.length){
				return ''
		}

		//check first letter. if first letter is capital return capital. otherwise return lowercase.
		let myStr = []
		if(str[0] === str[0].toUpperCase()){
				myStr.push(str[0].toUpperCase())
				}else{
						myStr.push(str[0])}
	  

					  
		//check next letters till end via for loop.
		//if it is a hyphen or underscore make following letter uppercase, 
		//skip letter 
		for(let i = 1; i<str.length; i++){
				if(str[i]=="-" || str[i] === "_"){
						i+=1;
						myStr.push(str[i].toUpperCase());
						i+=1;
				}
				myStr.push(str[i])
		}
	  
		return myStr.join("")
		}

		console.log(toCamelCase("the_stealth_warrior")) // theStealthWarrior
		console.log(toCamelCase("The-Stealth-Warrior")) //"TheStealthWarrior"
		console.log(toCamelCase("A-B-C")) // ABC 
		console.log(toCamelCase("parvati-")) 

		 */