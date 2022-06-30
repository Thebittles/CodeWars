String.prototype.toJadenCase = function (str) {
    //Take the string and split it, then we map through each word and captialize the first word
   return  this.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(' ')


   };
   

   
console.log("Britt is awesome".toJadenCase())