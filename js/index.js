let hamburger = document.getElementById('hamburger');
let nav = document.getElementById('nav');

function showNav() {
    if (nav.style.display === 'grid') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'grid';
    }
}

hamburger.addEventListener('click', showNav);