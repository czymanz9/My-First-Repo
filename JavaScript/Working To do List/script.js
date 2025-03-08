function addTask(){
    var taskContainer = document.getElementById("taskContainer");

    var newTask = document.createElement("li");
    newTask.className ="box";

    var message = document.getElementById("taskInput").value;
    newTask.innerText = message;
    if(message === "") return;

    var closeButton = document.createElement("button");
    closeButton.className ="button2";
    closeButton.type = "button";
    closeButton.innerHTML = "Remove";
    closeButton.onclick = function () {
        newTask.remove();
    };

    newTask.appendChild(closeButton);
    taskContainer.appendChild(newTask);
}