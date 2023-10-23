
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

let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(event) {
    touchStartY = event.touches[0].clientY;
}, false);

document.addEventListener('touchmove', function(event) {
    touchEndY = event.touches[0].clientY;
}, false);

document.addEventListener('touchend', function(event) {
    // Detect swipe down at the top of the page
    if (window.scrollY <= 0 && touchEndY > touchStartY + 50) { // 50px threshold for swipe
        toggleMenu();
    }
}, false);

function toggleMenu() {
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav-toggle');
    const mainContainer = document.querySelector('.main-container');

    header.classList.toggle('opened');
    navToggle.classList.toggle('cross');
    mainContainer.classList.toggle('slided');
}

// Existing code for toggling top bar
function toggleTopBar() {
    const header = document.querySelector('.header');

    if (window.scrollY >= 600) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}

// Existing code for collapsing when clicked outside
document.addEventListener('click', function(event) {
    const header = document.querySelector('.header');

    if (!header.contains(event.target)) {
        header.classList.remove('opened');
        // Add more class removals if needed
    }
});

// Call toggleTopBar when the page is scrolled
window.addEventListener('scroll', toggleTopBar);
