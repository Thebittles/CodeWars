//https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript


function validParentheses(parens) {
    let cache = {}

    if(parens.length < 1 ){
        return false
    }


    for(let i = 0; i < parens.length; i++){

        if(parens[i] == "("){
            if(cache["a"]){
                cache["a"] += 1
            } else {
                cache["a"] = 0
            }
        } else if (parens[i] == ")"){
            if(cache["b"]){
                cache["b"] += 1
            } else {
                cache["b"] = 0
            }

        }

    }

    console.log(cache.a, cache.b)
    if(cache.a !== cache.b){
        return false
    } return true

}
    

console.log(validParentheses("())"))