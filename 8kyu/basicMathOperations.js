//https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7



function basicOp(operation, value1, value2){
    let result;
    switch(operation){
        case "+":
        result = value1 + value2
        break;
        case "-":
        result = value1 - value2
        break;
        case "*":
        result = value1 * value2
        break;
        case "/":
        result = value1 / value2
        break;
    }

    return result
}

console.log(basicOp("+", 4, 7))