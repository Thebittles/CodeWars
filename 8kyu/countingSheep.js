//https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(arrayOfSheep) {

    let obj = {
        true: 0,
        false: 0
    }

    for(let i = 0; i < arrayOfSheep.length; i++){
        if(arrayOfSheep[i]){
            obj[true] += 1
        } else {
            obj[false] += 1
        }
    }

    return obj.true
  }

 let test = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]


console.log(countSheeps(test))

