//https://www.codewars.com/kata/58a510fa8dff50aa56000030/train/javascript

// // 57
// toASCIINumber=(a,b)=>(a.charCodeAt()+""+b.charCodeAt())|0
toASCIINumber=(a,b)=>a[c='charCodeAt']()+''+b[c]()|0

//console.log(toASCIINumber("A", "B"))


// The | does the following
// const a = 5;        // 00000000000000000000000000000101
// const b = 3;        // 00000000000000000000000000000011
// console.log(a | b); // 00000000000000000000000000000111


var a = "A"
var b = "B"
var c;
console.log(a[c='charCodeAt']()+"")
console.log(b[c]())

console.log(6566|0)