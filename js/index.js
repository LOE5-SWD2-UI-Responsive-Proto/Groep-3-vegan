let hamburger = document.getElementById('hamburger');
let nav = document.getElementById('nav');
let closeBtn = document.querySelector('.close-btn');

function toggleNav() {
    nav.classList.toggle('active');
}

hamburger.addEventListener('click', toggleNav);
closeBtn.addEventListener('click', toggleNav);
//light dark mode//

const zwartWit = document.getElementById("lightdark");

function switchlightdark() {
    if (document.documentElement.dataset.mode != 'dark') {
        document.documentElement.dataset.mode = 'dark';
    } else {
        document.documentElement.dataset.mode = 'light';
    }
}

lightdark.addEventListener('click', switchlightdark);


// open close code

let objDate = new Date();

const openOrClosed = document.getElementById("openOrClosed");

function openOrClosedMessage() {
    const hour = objDate.getHours();
    const minutes = objDate.getMinutes();

    if (hour >= 17 && hour <= 22) {
        openOrClosed.style.color = 'green';

        if (60 - minutes <= 10) {
            openOrClosed.innerHTML = `Open - Closes in: ${22 - hour}:${60 - minutes}`;
        } else {
            openOrClosed.innerHTML = `Open - Closes in: ${22 - hour}:${60 - minutes}`;
        }

    } else {
        openOrClosed.style.color = 'red';

        if (hour >= 22) {
            openOrClosed.innerHTML = `Closed - Opens in: ${24 - hour + 12}`;
        } else {
            openOrClosed.innerHTML = `Closed - Opens in: ${12 - hour}`;
        }
    }
}
function week() {
    openOrClosedMessage();
}
openOrClosedMessage();
