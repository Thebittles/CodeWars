//https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript


// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


function SeriesSum(n) {
    // [1, (1/4), (1/7), (1/10), (1/13), (1/16)]
    const array = []
    if(n == 1){
        return "1.00"
    } else if( n == 0){
        return "0.00"
    } else {
        let frac = 4
        for(let i = 1; i <= n; i++){
            if(i == 1){
                array.push(1)
            } else {
                array.push(Number((1/frac)))
                frac += 3
            }
        }

        }
       let total = array.reduce((prev, curr) => prev + curr)

       return total.toFixed(2)

    }




console.log(SeriesSum(3))
console.log(SeriesSum(39)) // Expected: '1.94', instead got: '1.95'
console.log(SeriesSum(0)) // Expected: '1.94', instead got: '1.95'
