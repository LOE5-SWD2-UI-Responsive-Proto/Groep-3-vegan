const knop = document.getElementById("lightdark") && document.getElementsByClassName("openingstijden");

function switchlightdark() {
    if (document.documentElement.dataset.mode != 'dark') {
        document.documentElement.dataset.mode = 'dark';
    } else {
        document.documentElement.dataset.mode = 'light';
    }
}

lightdark.addEventListener('click', switchlightdark);