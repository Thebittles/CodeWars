// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

//[1,2,3,4,3,2,1] =>  3  (1+2+3 == 1+2+3)
//[20,10,30,10,10,15,35] => 3
    
function findEvenIndex(arr){
    // Check length of array to find middle
     if(!(arr.length % 2 == 0)){
       let middle = Math.floor(arr.length / 2)
       let arr1 = arr.slice(0, middle)//Split it equal down middle into two arrays
       let arr2 = arr.slice(-middle)//
    
      // added up totals down the middle
      let sum = arr1.reduce((previousValue, currentValue) => previousValue + currentValue)
      let sum2 = arr2.reduce((previousValue, currentValue) => previousValue + currentValue)
        // If right down the middle are equal return middle
        if(sum == sum2){
            return middle
            // Resets the sums start at 0 on first array and start at end on second array increase first array decrease second array
        } else {
            sum = null
            sum2 = null
            let j = arr2.length - 1
            for(let i=0; i < middle; i++){
               sum += arr1[i]
               sum2 += arr2[j]
               console.log(sum)
               //check summs
               if (sum == sum2){
                return i + 1
               } else {
                j -= 1
               }

            }

        }
    } else {
        let middle = Math.floor(arr.length / 2) 
        let arr1 = arr.slice(0, middle)//Split it equal down middle into two arrays
        let arr2 = arr.slice(-middle)//
        //console.log(middle)
      // added up totals down the middle
      let sum = arr1.reduce((previousValue, currentValue) => previousValue + currentValue)
      let sum2 = arr2.reduce((previousValue, currentValue) => previousValue + currentValue)
       
      if (sum == sum2){
        return middle
       } else {
            sum = null
            sum2 = null
            let j = arr2.length - 1
            for(let i=0; i < middle; i++){
               sum += arr1[i]
               sum2 += arr2[j]
               //check summs
               if (sum == sum2){
                return i + 1
               } else {
                j -= 1
               }
               
            }
       }

       return -1
    }

}


//console.log(findEvenIndex([1,2,3,4,3,2,1])) //3
//console.log(findEvenIndex([20,10,30,10,10,15,35] )) // 3
console.log(findEvenIndex([1,100,50,-51,1,1])) // 1
console.log(findEvenIndex([1,2,3,4,5,6])) // -1
//console.log(findEvenIndex([1,100,50,50,100,1])) // 3

