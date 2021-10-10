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

// ADAPT SECTION 2 FOR SMALL SCREENS 

let windowRes = window.matchMedia("(max-width: 830px)");

let glideArrows = document.querySelector('.glide__arrows');

function hideGlideArrows(windowRes) {
    if (windowRes.matches) {
        glideArrows.style.visibility = 'hidden';
    }
    else {
        glideArrows.style.visibility = 'visible';
    }
}

let glideSlide = document.querySelectorAll('.glide__slide');
let glideSlideImg = [
    '<img src="assets/slide-img1-mobile.svg" alt="Será medida a temperatura ao chegar no escritório.">',
    '<img src="assets/slide-img2-mobile.svg" alt="Todos os consultores deverão usar máscaras dentro das acomodações dos escritórios.">',
    '<img src="assets/slide-img3-mobile.svg" alt="Nas mesas existem adesivos sinalizando onde os #SangueLaranjas devem sentar, para que haja o distanciamento necessário.">',
    '<img src="assets/slide-img4-mobile.svg" alt="Pessoas que estiverem sentindo algum sintoma não devem ir trabalhar presencialmente, a indicação é para que permaneçam em casa.">'
];

function switchImgs(windowRes) {
    if (windowRes.matches) {
        for (let i = 0; i < glideSlide.length; i++) {
            glideSlide[i].innerHTML = glideSlideImg[i];
        }
    }
};

let text = document.querySelector('#hide-mobile');

function hideText(windowRes) {
    if (windowRes.matches) {
        text.style.display = 'none';
    }
};

hideGlideArrows(windowRes);
switchImgs(windowRes);
hideText(windowRes);