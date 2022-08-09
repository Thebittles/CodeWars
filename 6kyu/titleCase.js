
function titleCase(title, minorWords) {
    //Check for title
    if(!title.length){
        return ""
    // If no minor words capitalize first letter of each word
    } else if(!minorWords){
        let arr = title.toLowerCase().split(" ").map(word =>  word[0].toUpperCase() + word.substring(1))
        return arr.join(" ")
    } else {
        let arr = title.toLowerCase().split(" ")
        let lower = minorWords.toLowerCase().split(" ")

        for(let i = 0; i < arr.length; i++){
            // First letter of the sentence needs to be capitalized
            if(i == 0){
                // Need to check if first word is more than one character
                if(arr[i].length !== 1){
                    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1)
                } else {
                    arr[i] = arr[i].toUpperCase()
                }
            }
            // If current word is not in Minor words  need to capitalize first letter else leave it lower
            if(lower.indexOf(arr[i]) == -1){
                arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1)
            }


        }

        return arr.join(" ")

    }

}




console.log(titleCase('', ''))// ''
console.log(titleCase('a clash of KINGS', 'a an the of'))//'A Clash of Kings')
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))// 'The Wind in the Willows')
console.log(titleCase('the quick brown fox'))// 'The Quick Brown Fox')