//https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript


const arr = N => {

    let array = []
    array.length = N
    for(let i = 0; i < array.length; i++){
        array.push(i)
    }
    return array
}



console.log(arr(4))