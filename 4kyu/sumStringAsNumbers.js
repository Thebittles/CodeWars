// https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript

function sumStrings(a,b) { 
    return  (BigInt(a) + BigInt(b)).toString()
}



   console.log(sumStrings('123', '456')) // '579
   console.log(sumStrings('712569312664357328695151392', '8100824045303269669937')) // 712577413488402631964821329