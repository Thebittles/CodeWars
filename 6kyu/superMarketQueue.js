// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript



function queueTime(customers, n) {
    // Creating an array n tills long, and filling with 0 so for example if n = 3 => [0,0,0]
    let arr = new Array(n).fill(0)

    if (customers.length == 0) {
        // Check for no customers
        return 0
        // When n is one just reduce array - add up all the time
    } else if(n === 1){
        return customers.reduce((a, b) => { return a + b})
    }  


    //Loop through the array of customers
    for(let i = 0; i < customers.length; i++){
        // Get the index for the min val in arr. 
        let index = arr.indexOf(Math.min(...arr))
        //Take the current lowest value int the arr and add the current customer. 
        arr[index] += customers[i];
    }
    //For loop has finished running meaning out of the tills in arr one has the highest wait time - return that.
    return Math.max(...arr);

  }



//  console.log(queueTime([5,3,4], 1))/*  */


//  console.log( queueTime([10,2,3,3], 2))/*  */
 // should return 10
 // because here n=2 and the 2nd, 3rd, and 4th people in the 
 // queue finish before the 1st person has finished.
 
 
 console.log( queueTime( [ 2, 2, 3, 3, 4, 4 ], 2)) // 9
