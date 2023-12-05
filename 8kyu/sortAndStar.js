
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript


function twoSort(s) {
    s.sort()

    let result = ''

    for (let i = 0; i < s[0].length; i++) {

        if (!(i === s[0].length - 1)) {
            result += s[0][i] + '***'
        } else {
            result += s[0][i]
        }

    }

    return result
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])) //'b***i***t***c***o***i***n'