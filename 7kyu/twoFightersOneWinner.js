// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript


function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

// My solution
    function declareWinner(fighter1, fighter2, firstAttacker) {
        //console.log(fighter1, fighter2)

        //Recursive function to perform attack until a obj.health is less than 0 
        function attack(obj1, obj2) {

            obj2.health -= obj1.damagePerAttack;
        
            if (obj2.health > 0 && obj1.health > 0) {
                obj1.health -= obj2.damagePerAttack
                attack(obj1, obj2)
            }  
                return  obj1.health > 0 ? obj1.name : obj2.name
            
        }

        return fighter1.name == firstAttacker ? attack(fighter1, fighter2) : attack(fighter2, fighter1)

 
}

       
// Other peoples  solutions


  
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")) // "Lew"

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")) //, "Harry"