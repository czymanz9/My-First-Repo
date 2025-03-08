/* 
Name: Czyrah Manzano
*/

/* Function puts the notification inside the notificationContainer, 
I created the output first in HTML then moved it into JS for the notifications.
After the intended visual is done, I appended it into the respective container.
In addition, after 5 second the notification will remove itself if the close button
is not clicked.
*/
function createNotification(){
    var notifContainer = document.getElementById("notificationContainer");

    var newNotification = document.createElement("div");
    newNotification.className = "card";
    newNotification.style.margin ="5%";
    newNotification.id = "notifMessage";

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardBody.style.display = "flex";
    cardBody.style.justifyContent = "space-between";

    var message =document.createElement("span");
    message.innerText ="You have a Notification!";

    var closeButton = document.createElement("button");
    closeButton.innerHTML = "X";
    closeButton.onclick = function () {
        newNotification.remove();
    };

    cardBody.appendChild(message);
    cardBody.appendChild(closeButton);
    newNotification.appendChild(cardBody);
    notifContainer.appendChild(newNotification);

    setTimeout(() => {
        newNotification.remove(cardBody);
    },5000);
}