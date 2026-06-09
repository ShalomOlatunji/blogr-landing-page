const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {

    dropdown.addEventListener("click", () => {

        const menu = dropdown.querySelector(".dropdown-menu");

        menu.classList.toggle("show");

    });

});