// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript



function queueTime(customers, n) {


    if (customers.length == 0) {
        // Check for no customers
        return 0
        // When n is one just reduce array - add up all the time
    } else if(n === 1){
        return customers.reduce((a, b) => { return a + b})
    } 

    // Order of queue NEVER changes

    //The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
    
    // If more n than customers - return highest value in array
    if ( customers.length < n){
        return Math.max(...customers)
    }

    let total = customers.reduce((a, b) => { return a + b})

    return Math.ceil((total/n))

  }



 console.log(queueTime([5,3,4], 1))/*  */


 console.log( queueTime([10,2,3,3], 2))/*  */
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.


queueTime([2,3,10], 2)
// should return 12

console.log(queueTime([1,2,3,4,5], 100)) // Return 5 