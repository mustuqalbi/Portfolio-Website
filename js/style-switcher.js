// ======================== Toggle Style Switcher Start =====================================
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// ======================== Toggle Style Switcher End =====================================

//================= Hide Style Switcher on Scroll Start ========================
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
//================= Hide Style Switcher on Scroll End ========================
// ========================== Theme Color Start ============================
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(Color) {
    alternateStyles.forEach((style) => {
        if (Color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}
// ========================== Theme Color End ============================
// ========================== Theme Light and Dark Start ============================
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
// ========================== Theme Light and Dark End ============================