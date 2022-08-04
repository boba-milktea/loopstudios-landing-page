const background = document.getElementById("background");
const headline = document.querySelector(".headline");
const menuToggle = document.getElementById("menu-toggle");



menuToggle.addEventListener('change', checkbox);

function checkbox() {
    if (menuToggle.checked === true) {
        background.classList.add("black");
        headline.classList.add("noShow");
    } else {
        background.classList.remove("black");
        headline.classList.remove("noShow");
    }
};

window.onload = function () {
    menuToggle.checked = false;

}