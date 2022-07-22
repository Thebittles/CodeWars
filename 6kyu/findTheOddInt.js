
function findOdd(A) {
  //happy coding!

  let memory = {}
  for(let i = 0, n = A.length; i < n; i++){
    if(memory[A[i]]){
     memory[A[i]] += 1 
    }

    else 
     memory[A[i]] = 1
  }

  for(const key in memory){
    console.log(key)
    if(memory[key] % 2 !== 0){
      return +key
    }
  }


}



//doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5)