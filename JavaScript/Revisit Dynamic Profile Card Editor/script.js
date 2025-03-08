/* 
Name: Czyrah Manzano
 */

/* I just added an event listener to the button and made another function
that called the rest. */

function profileTextUpdates(defaultText, newText){
    let newName = document.getElementById(newText).value;
    document.getElementById(defaultText).textContent = newName;
}

function updateImage(){
    let newImage = document.getElementById("profileUpdateImage").value;
    document.getElementById("profileImage").setAttribute("src", newImage);
}

function changeBackgroundColor(){
    let newColor = document.getElementById("profileUpdateBackgroundColor").value;
    var background = document.getElementById("profileCard");
    background.style.backgroundColor = newColor; 
}

function updateAll(){
    profileTextUpdates("profileName", "profileUpdateName");
    profileTextUpdates("profileBio", "profileUpdateBio");
    updateImage();
    changeBackgroundColor();
}


const button = document.getElementById("updateButton");
button.addEventListener("click", updateAll);
