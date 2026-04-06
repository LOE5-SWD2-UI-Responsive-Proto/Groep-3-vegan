//light dark mode//
const zwartWit = document.getElementById("lightdark");

function switchlightdark() {
    if (document.documentElement.dataset.mode != 'dark') {
        document.documentElement.dataset.mode = 'dark';
    } else {
        document.documentElement.dataset.mode = 'light';
    }
let hamburger = document.getElementById('hamburger');
let nav = document.getElementById('nav');
let closeBtn = document.querySelector('.close-btn');

function toggleNav() {
    nav.classList.toggle('active');
}

hamburger.addEventListener('click', toggleNav);
closeBtn.addEventListener('click', toggleNav);


let current = 1;
const total = 8;

const fotos = [
  document.querySelector(".foto1"),
  document.querySelector(".foto2"),
  document.querySelector(".foto3"),
  document.querySelector(".foto4"),
  document.querySelector(".foto5"),
  document.querySelector(".foto6"),
  document.querySelector(".foto7"),
  document.querySelector(".foto8")
];

function showFoto(n) {
  fotos.forEach(f => f.style.display = "none");
  fotos[n - 1].style.display = "block";
}

    if (hour >= 17 && hour < 22) {
        openOrClosed.style.color = 'green';
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

        if (hour > 22) {
            openOrClosed.innerHTML = `Closed - Opens in: ${24 - hour + 18}`;
        } else {
            openOrClosed.innerHTML = `Closed - Opens in: ${17 - hour}`;
        }
    }
}
function week() {
    openOrClosedMessage();
}
openOrClosedMessage();
showFoto(current);
setInterval(nextSlide, 4000);
