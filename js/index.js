let hamburger = document.getElementById('hamburger');
let nav = document.getElementById('nav');
let closeBtn = document.querySelector('.close-btn');

function toggleNav() {
    nav.classList.toggle('active');
}

hamburger.addEventListener('click', toggleNav);
closeBtn.addEventListener('click', toggleNav);


let current = 1;
const total = 4;

const fotos = [
  document.querySelector(".foto1"),
  document.querySelector(".foto2"),
  document.querySelector(".foto3"),
  document.querySelector(".foto4")
];

function showFoto(n) {
  fotos.forEach(f => f.style.display = "none");
  fotos[n - 1].style.display = "block";
}

function nextSlide() {
  current = (current % total) + 1;
  showFoto(current);
}

function prevSlide() {
  current = (current - 2 + total) % total + 1;
  showFoto(current);
}

document.querySelector(".forward").addEventListener("click", nextSlide);
document.querySelector(".back").addEventListener("click", prevSlide);

showFoto(current);
setInterval(nextSlide, 4000);