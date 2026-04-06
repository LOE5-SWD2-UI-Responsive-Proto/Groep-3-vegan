document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("lightdark");

    if (!button) return;

    button.addEventListener("click", function () {
        let mode = document.documentElement.getAttribute("data-mode");

        mode = (mode === "dark") ? "light" : "dark";

        document.documentElement.setAttribute("data-mode", mode);
    });
});