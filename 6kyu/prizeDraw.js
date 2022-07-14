/* Prize Draw - https://www.codewars.com/kata/5616868c81a0f281e500005c/train/javascript */

// Each letter of name has a value
//A/a = 1
//B/b = 2 
/// Convert names to lowercase and figure out name value 

//The length of fname  is added to sum of letters

// Array of weights linked to fnames
// take corresponding weight and multiple it by  each name sum

// To get whats called winning number. 


// *********** Test cases
// Weight array is at least as long as the number of names, it may be longer.
//If st is empty return "No participants".
// If n is greater than the number of participants then return not enough participants


let Str = "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
let weights = [1, 4, 4, 5, 2, 1];

function rank(st, we, n) {
  // your code
  let names = st.split(",")
  let nameArr = st.split(",").map((name) => {

    return valueArr = name.toLowerCase().split("")
  })

  let nameValueArr = nameArr.map((el) => {
    var nameValue = el.length
    for (let i = 0; i < el.length; i++) {
      nameValue += (el[i].charCodeAt() - 96)
    }
    return nameValue
  })


  function checkForDuplicates(array) {
    return new Set(array).size !== array.length
  }


  //Storing names with their values
  var result = [];
  names.forEach((name, i) => { result.push([name, (nameValueArr[i]) * we[i]]) });


  // Sorting by values
  let sortNameValues = result.sort(function (a, b) { return b[1] - a[1] })
  //Sorting by names
let sortName = result.sort()

var sortByName = true;

  if (st.length == 0) {
    return "No participants"
  } else if (n > nameArr.length) {
    return "Not enough participants"
  } else if (sortByName === true){
    console.log("Sort by name ", sortName)
    return  sortName[n -1][0]
  } else {
    console.log("Sort by score", sortNameValues)
    return  sortNameValues[(n -1)][0]
  }

}

//console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6 )) // No participants
//console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin",  [4, 2, 1, 4, 3, 1, 2], 8)) // Not enough
console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4)) // Benjamin




