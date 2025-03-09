/* Name: Czyrah Manzano */

/* Character */
var characHelmet = document.getElementById("characHelmet");
var characArmor = document.getElementById("characArmor");
var characLeggings = document.getElementById("characLeggings");
var characBoots = document.getElementById("characBoots");

/* Select All */
let allHelmet = document.querySelectorAll(".selectHelmet");
let allArmor = document.querySelectorAll(".selectArmor");
let allLeggings = document.querySelectorAll(".selectLeggings");
let allBoots = document.querySelectorAll(".selectBoots");

/* Attaching event listener to each one */
allHelmet.forEach(helmet =>{
    helmet.addEventListener("click", function(){
        userSelect(this, characHelmet, "data-helmet");
    });
})

allArmor.forEach(armor =>{
    armor.addEventListener("click", function(){
        userSelect(this, characArmor, "data-armor");
    });
})

allLeggings.forEach(leggings =>{
    leggings.addEventListener("click", function(){
        userSelect(this, characLeggings, "data-leggings");
    });
})

allBoots.forEach(boots =>{
    boots.addEventListener("click", function(){
        userSelect(this, characBoots, "data-boots");
    });
})

/* This function replaces the src of the main/default to the data attribute called */
function userSelect(element,part,data){
    var newPart = element.getAttribute(data);
    if (newPart) {
        part.src = newPart;
    }
}