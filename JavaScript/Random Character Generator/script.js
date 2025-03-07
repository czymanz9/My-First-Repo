/*
1. Create a Character Object
2. Add a Random Class
3. Add Randomized Health
4. Assign a Special Ability
5. Create a generateCharacter() Function 
6. Battle Simulation
*/
/* Generates a character randomly with its details, the name can be defined if you want it to be
specific, the others are just produced randomly */
/* The battle method logs the 2 character's name and the so called battle when one character attacks the other with an attack of 5 to 20 which decreases the opponents health*/
function  generateCharacter(name){
    let character = {
        name: name || ["Thorin", "Elara", "Zane", "Ivy"][Math.floor(Math.random() * 4)] ,
        health: 100,
        randomizeHealth(){
            this.health = Math.floor(Math.random() * 101) + 50;
        },
        class: ["Warrior", "Mage", "Archer", "Healer", "Assassin"][Math.floor(Math.random() * 5)],
        specialAbility: ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"][Math.floor(Math.random() * 5)],
        battle(character2){
            let attack = Math.floor(Math.random() * 21) + 5;
            return console.log(`Character ${this.name} attacked Character ${character2.name} with ${this.specialAbility}. ${character2.name}'s health dropped from ${character2.health} to ${character2.health - attack}`);
        },
    };
    character.randomizeHealth();
    return character;
} 

/*
7. Generate Multiple Characters
    - made a loop to make a random character depending on how many they input and store those in an array.
*/
function generateMultipleCharacters(num){
    let characters = []; 
    for(let i = 0 ; i < num; i ++){
        characters.push(generateCharacter());
    }
    return characters;
}

/* Logs to make sure and check that it is working */
const character1 = generateCharacter("Zane");
const character2 = generateCharacter("Elara");
console.log(character1, character2);
character2.battle(character1);
const party = generateMultipleCharacters(5);
console.dir(party);
