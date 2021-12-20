/* https://www.codewars.com/kata/56747fd5cb988479af000028 */


function getMiddle(s)
{
  
  if(s.length % 2 == 0){
    //return middle two
   return s.substring(Math.floor(s.length / 2) - 1, Math.floor(s.length / 2) + 1)
  } else {
    // return the middle one
    return s.substring(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1)
  }

}
console.log(getMiddle("test")) // es //length 4
console.log(getMiddle("testing")) //t //length 7
console.log(getMiddle("middle")) //dd //6
