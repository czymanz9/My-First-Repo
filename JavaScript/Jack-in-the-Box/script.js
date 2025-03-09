/* Name: Czyrah Manzano */

var theBox = document.getElementById("box");
var button = document.getElementById("buttonId");
var sound = new Audio("jackinthebox_sound.mp3");

/*Added event listeners to the image and button when clicked.*/
theBox.addEventListener("click", buttonClick);
button.addEventListener("click", buttonClick);

/* sets the new src from the data attribute stored from the image,
then after 6s which is the duration of the gif, it goes back to its original src.
It also plays a sound when clicked.*/
function buttonClick(){
    var newImg = theBox.getAttribute("data-new-src");
    theBox.src = newImg;
    sound.play();

    setTimeout(() =>{
        theBox.src = "start.png";
    },6000);
}