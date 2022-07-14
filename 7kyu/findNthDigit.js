// https://www.codewars.com/kata/577b9960df78c19bca00007e/train/javascript

// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0

// 5673, 4 --> 5
// 129, 2 --> 2
// -2825, 3 --> 8    528-2
// -456, 4 --> 0
// 0, 20 --> 0
// 65, 0 --> -1
// 24, -8 --> -1

var findDigit = function(num, nth){
    // If nth is a negative number
    if (nth<=0) return -1;
    // Returns postive out of negative and turns it to string
    let nums=(''+Math.abs(num));
    // Slice then turn it back into a number
    return nums.slice(nums.length-nth,nums.length-nth+1)*1;
}


console.log(findDigit(5673, 4))
console.log(findDigit(-2825, 3))
console.log(findDigit(0, 20))
console.log(findDigit(-456, 4))