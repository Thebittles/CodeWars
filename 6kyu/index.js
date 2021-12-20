/* https://www.codewars.com/kata/54bb6f887e5a80180900046b/train/javascript/617e0821d2434200514a9a11 */



function longestPalindrome(s) {

    if (s.length === 0 || s.length === 1) {
        return s.length
    }
    
    let x = 0;
    let y = 2;
    let winner = 0;
    while (y < s.length) {
        let newString = s.substr(x, y);
        let reversedString = newString.split("").reverse().join("");
        if (newString === reversedString) {
            winner = newString.length;
            y++
        } else {
            x += 1;
            y += 1;
        }
    } console.log(winner);
    return winner;
}

let test = "zzbaabcd"

longestPalindrome(test)
