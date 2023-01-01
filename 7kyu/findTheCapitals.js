//https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

var capitals = function (word) {
	
    let result = []

    for(let i = 0; i < word.length; i++){
        if(word.charCodeAt(i) <= 90){
            result.push(i)
        }
    }

    return result
};

console.log(capitals('CodEWaRs'))