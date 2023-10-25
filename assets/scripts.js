
// Cards Animation Initialization
// ==================================================================
function initCardAnimations() {
    let cards = Array.from(document.querySelectorAll('.anim'));
    cards.forEach(function(card, index) {
        setTimeout(function() {
            card.style.opacity = "1";
            card.style.transform = "translate3D(0, 0, 0) rotate3D(0, 0, 0, 0)";
        }, 50 * index);
    });
}

initCardAnimations();


// Toggling top bar on scroll
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > 1) {
        header.classList.add('fixed');

        if (currentScrollTop < lastScrollTop) {
            header.style.transform = 'translateY(0%)';
        } else {
            header.style.transform = 'translateY(-10rem)';
        }
    } 
    else {
        header.classList.remove('fixed');
        header.style.transform = 'none'; // Reset the transform
    }

    lastScrollTop = currentScrollTop;
});


// Menu
// ==================================================================

let touchStartY = 0;
let touchEndY = 0;

const mainContainer = document.querySelector('.main-container');

mainContainer.addEventListener('touchstart', function(event) {
    touchStartY = event.touches[0].clientY;
}, false);

mainContainer.addEventListener('touchmove', function(event) {
    touchEndY = event.touches[0].clientY;
}, false);

mainContainer.addEventListener('touchend', function(event) {
    // Detect swipe down at the top of the page
    if (window.scrollY <= 10 && touchEndY > touchStartY + 50) { // 50px threshold for swipe
        toggleMenu();
    }
}, false);

function toggleMenu() {
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav-toggle');
    const mainContainer = document.querySelector('.main-container');
    const navItems = Array.from(document.querySelectorAll('.header .anim-nav')).reverse();

    body.classList.toggle('fixed');
    header.classList.toggle('opened');
    navToggle.classList.toggle('cross');
    mainContainer.classList.toggle('slided');

    if (header.classList.contains('opened')) {
        navItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translate3d(0, 0, 0)";
            }, index * 80); // 100ms delay between items
        });
    } else {
        navItems.forEach(item => {
            item.style.opacity = "";
            item.style.transform = "";
        });
    }
}

// Code for collapsing when clicked outside
document.addEventListener('click', function(event) {
    const body = document.querySelector('.fixed');
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav-toggle');
    const mainContainer = document.querySelector('.main-container');

    if (!header.contains(event.target) && event.target !== navToggle) {
        body.classList.remove('fixed');
        header.classList.remove('opened');
        navToggle.classList.remove('cross');
        mainContainer.classList.remove('slided');
    }
});

// Listener for the nav toggle button
document.querySelector('.nav-toggle').addEventListener('click', function() {
    toggleMenu();
});