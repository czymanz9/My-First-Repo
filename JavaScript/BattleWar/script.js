/* 1. Define Two Warrior Objects */
let warrior1 = {
    name: "Thor" ,
    hp: 100,
    strength: 20,
    attack() {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};

let warrior2 = {
    name: "Zeus" ,
    hp: 100,
    strength: 20,
    attack() {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};

/* 2. Simulate 10 Rounds of Battle */
/* Made the warrior 1 attack first then check if the hp is zero, if it is, the battle ends with the announcement of the winner.
The same goes with warrior2, the loop ends when its already round 10 or when one of the warriors has an hp of zero.*/
console.log("=== Battle Start! ===");

for(let i = 1; i <= 10 ; i++){
    console.log(`=== Round ${i} ===`);

    /* Warrior1 Attacking */
    let attackWarrior1 = warrior1.attack();
    warrior2.hp = warrior2.hp - attackWarrior1;
    console.log(`${warrior1.name} attacks ${warrior2.name} and does ${attackWarrior1} damage!`);
    console.log(`${warrior1.name} HP: ${warrior1.hp} | ${warrior2.name} HP: ${warrior2.hp}`);

    if (warrior2.hp <= 0){
        console.log(`=== ${warrior1.name} WINS THE BATTLE!! === =`);
        break;
    };

    /* Warrior2 Attacking */
    let attackWarrior2 = warrior2.attack();
    warrior1.hp = warrior1.hp - attackWarrior2;
    console.log(`${warrior2.name} attacks ${warrior1.name} and does ${attackWarrior2} damage!`);
    console.log(`${warrior1.name} HP: ${warrior1.hp} | ${warrior2.name} HP: ${warrior2.hp}`);
    
    if (warrior1.hp <= 0){
        console.log(`=== ${warrior2.name} WINS THE BATTLE!! ===`);
        break;
    };

    /* 3. Determine the Winner */
    if(warrior1.hp > warrior2.hp){
        console.log(`=== ${warrior1.name} WINS THE BATTLE! ===`);
    }else if(warrior2.hp > warrior1.hp){
        console.log(`=== ${warrior2.name} WINS THE BATTLE! ===`);
    }else{
        console.log("=== ITS A DRAW! ===");
    };
};


