/* Name: Czyrah Manzano */

/* Changing agent img and desc */
var agentImg = document.getElementById("agentImg");
var agentName = document.getElementById("agentName");
var agentDesc = document.getElementById("agentDesc");
var agentVideo = document.getElementById("videoBg");

/* Select All */
let agents = document.querySelectorAll(".agentIcon");

/* Attaching event listener */
agents.forEach(agent =>{
    agent.addEventListener("click", function(){
        agentSelect(this,"data-name", "data-desc","data-agentImg", "data-video");
    })
})

/*
Agent Select Function, the function gets the data attributes then replace the info
that they have in the specific parts like the images, name, description and the video.
I searched on how to put the video as a background and dynamically change depending on the
agent selected. Its kinda similar on how to change the src of an image as I noticed.
*/
function agentSelect(element, name, desc, img, video){
    var newName = element.getAttribute(name);
    var newDesc = element.getAttribute(desc);
    var newImg = element.getAttribute(img);
    var newVid = element.getAttribute(video);

    agentName.textContent = newName;
    agentDesc.textContent = newDesc;
    agentImg.src = newImg;

    var source = agentVideo.querySelector("source");
    source.src = newVid;
    agentVideo.load(); 
    agentVideo.play();
}