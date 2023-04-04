//https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

const binaryArrayToNumber = arr => {

    //loop through arr backwards
    // last element would be 2^0 then so on 
    let position = 0;
    let decimal = 0;

    for(let i = arr.length - 1;  i >= 0; i--){
        if(arr[i]){
            decimal += Math.pow(2, position)
        } 
        position++;
    }
    return decimal;
};


console.log(binaryArrayToNumber([0, 0, 0, 1])) // 1
console.log(binaryArrayToNumber([0, 0, 1, 0])) // 2


