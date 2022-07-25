//https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

function hero(bullets, dragons){
        let neededBullets = dragons*2

        let life = bullets - neededBullets

        if(life < 0){
            return false
        } else {
            return true
        }
    }
