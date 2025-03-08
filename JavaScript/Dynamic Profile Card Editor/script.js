/* 
Name: Czyrah Manzano
 */

/* So I did this function first because its the first one to be done, and I noticed that its just the same for the bio so I just made another function that does it both */
/* function updateName(){
    let newName = document.getElementById("profileUpdateName").value;
    document.getElementById("profileName").textContent = newName;
} */

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