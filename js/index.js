let hamburger = document.getElementById('hamburger');
let nav = document.getElementById('nav');
let closeBtn = document.querySelector('.close-btn');

function toggleNav() {
    nav.classList.toggle('active');
}

hamburger.addEventListener('click', toggleNav);
closeBtn.addEventListener('click', toggleNav);