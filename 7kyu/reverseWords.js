//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript


//"double  spaces"      ==> "elbuod  secaps"
//"This is an example!" ==> "sihT si na !elpmaxe"

function reverseWords(str) {

    let arr = str.split(" ")

    arr.forEach((el, index) => {
        if (!(arr[index] == " ")) {
            arr[index] = el.split("").reverse().join("")
        }
     }
    )


    return arr.join(" ")
}

console.log(reverseWords("double  spaces"))