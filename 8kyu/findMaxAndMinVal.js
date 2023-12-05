//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript


// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5


var min = function(list){
    //Sorts the array in ascending order, first elements would be the lowest number aka min
    return list.sort()[0];
}

var max = function(list){
    
    return Math.max(...list)
}

//Sort the array - depending on min or max function return first element or last element

// Loop through the array and compare the elements if its min function test to see if the current is lower than the lowest number we've seen so far
// Loop through the array and compare the elements if its max fuction test to see if the current is higher than the highest number we've seen so far

// Min or Max

console.log(min([-52, 56, 30, 29, -54, 0, -110]))//-110

console.log(min([42, 54, 65, 87, 0])) // 0

console.log(max([4,6,2,1,9,63,-134,566]))// 566

console.log(max([5])) // 5