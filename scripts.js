// OPEN AND CLOSE HAMBURGUER MENU ON MOBILE

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

// TRANSITION HEADER BACKGROUND COLOR ON WINDOW SCROLL

window.onscroll = function() {changeHeader()};

function changeHeader() {
    let header = document.getElementById('header');

    if (document.body.scrollTop >= header.offsetHeight || document.documentElement.scrollTop >= header.offsetHeight) {
        header.className = 'changeColor';
    }
    else {
       header.className = '';
    }
}