
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
