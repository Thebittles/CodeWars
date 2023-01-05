

//https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript


function incrementString (string) {

    let arr = string.match(/[0-9]+$/)
    console.log(arr)
    if(arr == null){
        return string+1
    } 


  }





// foo -> foo1
// console.log(incrementString('foo'))

// "foobar000 => foobar001"
console.log(incrementString('foobar000'))

// // foobar23 -> foobar24
// console.log(incrementString('foo1'))

// // foo0042 -> foo0043
//  console.log(incrementString('foo0042'))

// // // foo9 -> foo10
// console.log(incrementString('foo10'))

// // // foo099 -> foo100
//  console.log(incrementString('foo100'))