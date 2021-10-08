let button = document.getElementById("menuIcon");
let menu = document.getElementById("menuBlock");

button.addEventListener("click", showMenu)

let clickCounter = -1;

function showMenu() {
    clickCounter += 1;     
    
    if (clickCounter > 0 && clickCounter % 2 != 0) {
        menu.style.opacity = 0;
    }
    
    else if (clickCounter % 2 == 0) {
        menu.style.opacity = 1;
        menu.style.visibility = 'visible';
    }
}